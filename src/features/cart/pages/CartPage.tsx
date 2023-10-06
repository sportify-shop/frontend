import { RootState } from "@/app/redux/store";
import PageTemplate from "@/common/pages/templates/PageTemplate";
import { useSelector } from "react-redux";
import CartDisplayer from "../components/organisms/CartDisplayer.component";
import { Grid } from "@mui/material";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import { NavLink } from "react-router-dom";

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  
  if (!cart) return <div> Erreur !</div>;

  return (
    <PageTemplate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CartDisplayer cart={cart} />
        </Grid>
        { Object.keys(cart).length > 0 && (
          <Grid item xs={12} display="flex" justifyContent="end">
            <NavLink to="/order">
              <SuccessButton value="Valider mon panier" />
            </NavLink>
          </Grid>
        )}
      </Grid>
      
    </PageTemplate>
  );
}

export default CartPage;