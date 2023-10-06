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
      {!products && <p> Il n'y a aucun produit à afficher. </p>}
      {products && products.length === 0 && <p> Aucun produit ne correspond à votre recherche. </p>}
      {products && products.map((product) => (
        <NavLink to={`/products/${product.name}`} key={product.id}>
          <ProductDetail product={product} />
        </NavLink>
      ))}
    </Stack>
  )
}

export default ListProducts;