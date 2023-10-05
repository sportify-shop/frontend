import { ProductModel } from "@/features/product/models/product.model";
import { Box, Button, Stack, Typography } from "@mui/material";
import { productDetailStyle } from "./ProductDetail.style";
import Badge from "../../atoms/Badge/Badge.component";

type Props = {
  product: ProductModel;
}

export const ProductDetail = ({ product }: Props): JSX.Element => {
  return (
    <Box className={productDetailStyle}>
      <div style={{ display: "flex", justifyContent: 'center'}}>
        <Box
          sx={{
            height: 150,
            width: 150,
            maxHeight: { xs: 130, md: 150 },
            maxWidth: { xs: 130, md: 150 },
          }}
          mb={2}
          mt={1}
        >
          <img style={{ maxHeight: "100%" }} src="https://fr.shopping.rakuten.com/photo/2425018185.jpg" alt={product.name} />
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