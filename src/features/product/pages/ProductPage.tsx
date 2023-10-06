import PageTemplate from "@/common/pages/templates/PageTemplate";
import { useParams } from "react-router-dom";
import Error404Page from "@/common/pages/Error404Page";
import { useGetProductByNameQuery } from "../services/productApi.service";
import { Grid, Stack, Typography } from "@mui/material";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import { useGetCategoriesQuery } from "../services/categoryApi.service";
import Badge from "../components/atoms/Badge/Badge.component";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import {useLazyGetFileQuery } from "@/common/services/api";
import { useEffect } from "react";
import Loader from "@/common/components/loader/loader.component";

const ProductPage: React.FC = (): JSX.Element => {
  const {productName} = useParams();
  const { data: product, isLoading } = useGetProductByNameQuery(
    { name: productName! }, 
    { skip: !productName || productName === "" }
  );
  const {data: categories} = useGetCategoriesQuery();
  const dispatch = useDispatch();
  const [getFile, { data: file, isLoading: isLoadingFile }] = useLazyGetFileQuery();

  useEffect(() => {
    if (!product) return;

    getFile({
      fileName: product.image_slug
    })
  }, [product]);

  if (isLoading) return <div> Chargement... </div>;
  if (!product || !categories) return <Error404Page />;

  return (
    <PageTemplate>
      <Grid container mt={2}>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center"}}>
          {file ? <img style={{ height: 400 }} src={file.url} alt={product.name} /> : <Loader />}    
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center"}}>
          <Stack spacing={3}>
            <Typography component="h1">{product.name}</Typography>
            <Stack direction="row" spacing={1}>
              <Badge label={`${product.price}€`} color="#FFE928" />
              <Badge label={categories.filter((cat) => cat.id === product.category_id)[0].name} color="lightgray" />
            </Stack>
            <Typography component="p">{product.description}</Typography>
            <SuccessButton value={"Ajouter au panier"} onClick={() => dispatch(addToCart(product))} />
          </Stack>
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default ProductPage;