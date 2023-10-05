import PageTemplate from "@/common/pages/templates/PageTemplate"
import { Grid } from "@mui/material";
import ListProducts from "../components/organisms/ListProducts/ListProducts.component";
import ProductFilters from "../components/organisms/ProductFilters/ProductFilters.component";
import { FilterForm, QueryOrderBy } from "../models/product.model";
import { useEffect } from "react";
import { useLazyGetProductsQuery } from "../services/productApi.service";

const ListProductPage: React.FC = () => {
  const [getProducts, { data: products, isLoading }] = useLazyGetProductsQuery();

  useEffect(() => {
    getProducts({
      orderBy: QueryOrderBy.ASC
    });
  }, [])

  const applyFilters = (d: FilterForm) => {
    getProducts({
      name: d.name !== "" ? d.name : undefined,
      maxPrice: d.maxPrice,
      gender: d.gender !== "" ? d.gender : undefined,
      categoryId: d.categoryId !== "" ? d.categoryId : undefined,
      orderBy: d.orderBy !== "" ? d.orderBy : undefined
    })
  }

  const refreshFilters = () => {
    getProducts({ orderBy: QueryOrderBy.ASC });
  }

  return (
    <PageTemplate title={'Nos produits'}>
      <Grid container mt={2}>
        <Grid item xs={12} borderBottom={"1px solid lightgray"} mb={1}>
          <ProductFilters applyFilters={applyFilters} refreshFilters={refreshFilters} />
        </Grid>
        <Grid item xs={12}>
          {isLoading ? "Chargement" : <ListProducts products={products} />}
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ListProductPage;