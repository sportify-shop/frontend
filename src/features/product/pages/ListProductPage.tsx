import PageTemplate from "@/common/pages/templates/PageTemplate"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ListProducts from "../components/organisms/ListProducts/ListProducts.component";
import { productCategories, products } from "../mocks";
import Error404Page from "@/common/pages/Error404Page";
import ProductFilters from "../components/organisms/ProductFilters/ProductFilters.component";
import { FilterForm, ProductGender, ProductModel } from "../models/product.model";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useGetProductsQuery } from "../api";

const ListProductPage: React.FC = () => {
  const {data: products, isLoading: isLoadingProducts} = useGetProductsQuery({
    name: 'Test',
    maxPrice: 500,
    gender: ProductGender.Homme,
    categoryId: 1
  });
  const {categoryName} = useParams();
  const {register, handleSubmit, reset, watch, setValue} = useForm<FilterForm>();
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(products!);

  const onSubmit = (d: FilterForm) => {
    // setFilteredProducts(products.filter((product) => product.name.toLowerCase().startsWith(d.name.toLowerCase())));
    // setFilteredProducts(products.filter((product) => product.categoryId === Number(d.categoryId)));
    // setFilteredProducts(products.filter((product) => product.gender === d.gender));
    // setFilteredProducts(products.filter((product) => product.price <= d.maxPrice));

    console.log(d);
  }

  if (productCategories.filter((cat) => cat.name === categoryName).length === 0) return <Error404Page />;

  return (
    <PageTemplate title={categoryName}>
      <Grid container mt={2}>
        <Grid item xs={12} borderBottom={"1px solid lightgray"} mb={1}>
          <ProductFilters 
            onSubmit={onSubmit} 
            register={register} 
            handleSubmit={handleSubmit}
            watch={watch} 
            setValue={setValue} 
            reset={reset} 
          />
        </Grid>
        <Grid item xs={12}>
          {products ? <ListProducts products={products} /> : "Aucun produit ici"}
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ListProductPage;