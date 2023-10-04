import PageTemplate from "@/common/pages/templates/PageTemplate"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ListProducts from "../components/organisms/ListProducts/ListProducts.component";
import { productCategories, products } from "../mocks";
import ProductFilters from "../components/organisms/ProductFilters/ProductFilters.component";
import Error404Page from "@/common/pages/Error404Page";

const ProductPage: React.FC = () => {
  const {categoryName} = useParams();

  if (productCategories.filter((cat) => cat.name === categoryName).length === 0) return <Error404Page />;

  return (
    <PageTemplate title={categoryName}>
      <Grid container mt={2}>
        <Grid item xs={2}>
          <ProductFilters />
        </Grid>
        <Grid item xs={10}>
          <ListProducts products={products} />
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ProductPage;