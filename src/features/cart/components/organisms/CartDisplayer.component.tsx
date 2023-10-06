import { ProductModel } from "@/features/product/models/product.model";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../cartSlice";

type Props = {
  cart: Record<string, ProductModel>;
}

const CartDisplayer = ({ cart }: Props) => {
  const cartTotal: string = Object.values(cart).map((product: ProductModel) => {return product.price * product.quantity}).reduce((partialSum, a) => partialSum + a, 0).toFixed(2);
  const dispatch = useDispatch();
  
  return (
    <>
      { Object.values(cart).length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="center">Quantité</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(cart).map((product: ProductModel) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {product.quantity}
                  </TableCell>
                  <TableCell align="center">{product.price * product.quantity}€</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => dispatch(removeFromCart({ id: String(product.id) }))} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  
                </TableCell>
                <TableCell align="center">
                  
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="right"><Typography component="p" fontWeight="bold">Total: {cartTotal}€</Typography></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : <Paper sx={{ padding: "8px 24px"}}> Votre panier est vide. </Paper>}
    </>
  )
}

export default CartDisplayer;