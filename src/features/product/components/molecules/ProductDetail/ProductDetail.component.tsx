import { ProductModel } from "@/features/product/models/product.model";
import { Box, Button, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { productDetailStyle } from "./ProductDetail.style";
import PriceDisplayer from "../../atoms/PriceDisplayer.component";
// @ts-ignore
import productImg from "@/assets/product.png";

type Props = {
  product: ProductModel;
}

export const ProductDetail = ({ product }: Props): JSX.Element => {
  return (
    <Box className={productDetailStyle}>
      <div style={{ display: "flex", justifyContent: 'center'}}>
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            maxHeight: { xs: 130, md: 150 },
            maxWidth: { xs: 130, md: 150 },
          }}
          mb={2}
          mt={1}
          alt={product.name}
          src={productImg}
        />
      </div>
      <Stack spacing={1} alignItems="center">
        <div>
        <PriceDisplayer price={product.price} />
        </div>
        <Typography component="p" sx={{ fontSize: "14px !important", textTransform: "uppercase"}}>{product.name}</Typography>
        <Button variant="outlined">Voir le détail</Button>
      </Stack>
    </Box>
  );
}

export default ProductDetail;