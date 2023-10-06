import { ProductModel } from "@/features/product/models/product.model";
import { Box, Button, Stack, Typography } from "@mui/material";
import { productDetailStyle } from "./ProductDetail.style";
import Badge from "../../atoms/Badge/Badge.component";
import { useGetFileQuery } from "@/common/services/api";
import Loader from "@/common/components/loader/loader.component";

type Props = {
  product: ProductModel;
}

export const ProductDetail = ({ product }: Props): JSX.Element => {
  const { data: file, isLoading: isLoadingFile } = useGetFileQuery({ fileName: product.image_slug })

  return (
    <Box className={productDetailStyle}>
      <div style={{ display: "flex", justifyContent: 'center'}}>
        <Box
          sx={{
            height: 150,
            width: 150,
            maxHeight: { xs: 130, md: 150 },
            maxWidth: { xs: 130, md: 150 },
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}
          mb={2}
          mt={1}
        >
          { file ? <img style={{ height: "130px" }} src={file.url} alt={product.name} /> : <Loader /> }
        </Box>
      </div>
      <Stack spacing={1} alignItems="center">
        <div>
        <Badge label={`${product.price}€`} color="#FFE928" />
        </div>
        <Typography component="p" sx={{ fontSize: "14px !important", textTransform: "uppercase"}}>{product.name}</Typography>
        <Button variant="outlined">Voir le détail</Button>
      </Stack>
    </Box>
  );
}

export default ProductDetail;