import PageTemplate from "@/common/pages/templates/PageTemplate"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ListProducts from "../components/organisms/ListProducts/ListProducts.component";
import { productCategories, products } from "../mocks";
import Error404Page from "@/common/pages/Error404Page";
import ProductFilters from "../components/organisms/ProductFilters/ProductFilters.component";
import { useState } from "react";

const ProductPage: React.FC = () => {
  const {categoryName} = useParams();
  const [searchBarValue, setSearchBarValue] = useState("");

  if (productCategories.filter((cat) => cat.name === categoryName).length === 0) return <Error404Page />;

  return (
    <PageTemplate title={categoryName}>
      <Grid container mt={2}>
        <Grid item xs={12}>
          <ProductFilters  />
        </Grid>
        <Grid item xs={12}>
          <ListProducts products={products} />
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ProductPage;