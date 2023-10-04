import PageTemplate from "@/common/pages/templates/PageTemplate"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ListProducts from "../components/organisms/ListProducts/ListProducts.component";
import { productCategories } from "../mocks";
import Error404Page from "@/common/pages/Error404Page";
import ProductFilters from "../components/organisms/ProductFilters/ProductFilters.component";
import { FilterForm, ProductGender } from "../models/product.model";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useLazyGetProductsQuery } from "../api";

const ListProductPage: React.FC = () => {
  const [getProducts, products] = useLazyGetProductsQuery();
  const {categoryName} = useParams();
  const {register, handleSubmit, reset, watch, setValue} = useForm<FilterForm>({
    values: {
      name: '',
      maxPrice: 999,
      gender: ProductGender.Unisexe,
      categoryId: 1
    }
  });

  useEffect(() => {
    getProducts({});
  }, [])

  const onSubmit = (d: FilterForm) => {
    getProducts({
      name: d.name !== "" ? d.name : undefined,
      maxPrice: d.maxPrice,
      gender: d.gender,
      categoryId: d.categoryId
    })
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
          <ListProducts products={products.data} />
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ListProductPage;