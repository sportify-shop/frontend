import PageTemplate from "@/common/pages/templates/PageTemplate"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ListProducts from "../components/organisms/ListProducts/ListProducts.component";
import { productCategories, products } from "../mocks";
import Error404Page from "@/common/pages/Error404Page";
import ProductFilters from "../components/organisms/ProductFilters/ProductFilters.component";
import { useEffect, useState } from "react";
import { ProductModel } from "../models/product.model";

const ListProductPage: React.FC = () => {
  const {categoryName} = useParams();
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [priceMaxValue, setPriceMaxValue] = useState<number>(999);
  const [testProducts, setTestProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    setTestProducts(products.filter((product) => product.name.toLowerCase().includes(searchBarValue.toLowerCase())))
  }, [searchBarValue])

  useEffect(() => {
    setTestProducts(products.filter((product) => product.price < priceMaxValue));
  }, [priceMaxValue])

  if (productCategories.filter((cat) => cat.name === categoryName).length === 0) return <Error404Page />;

  return (
    <PageTemplate title={categoryName}>
      <Grid container mt={2}>
        <Grid item xs={12}>
          <ProductFilters 
            setSearchBarValue={setSearchBarValue}  
            setPriceMaxValue={setPriceMaxValue}
          />
        </Grid>
        <Grid item xs={12}>
          <ListProducts products={testProducts} />
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ListProductPage;