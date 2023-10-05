import { ProductResponse } from "@/features/product/models/product.model";
import { Stack } from "@mui/material";
import { listProductsStyle } from './ListProducts.style';
import ProductDetail from "../../molecules/ProductDetail/ProductDetail.component";
import { NavLink } from "react-router-dom";

type Props = {
  products: ProductResponse[] | undefined;
}

const ListProducts = ({ products }: Props): JSX.Element => {
  return (
    <Stack
      direction="row"
      className={listProductsStyle}
    >
      {!products && <p> aucun produit ici. </p>}
      {products && products.map((product) => (
        <NavLink to={`/products/${product.name}`}>
          <ProductDetail product={product} />
        </NavLink>
      ))}
    </Stack>
  )
}

export default ListProducts;