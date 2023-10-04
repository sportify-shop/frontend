import { Box } from "@mui/material"
import { priceDisplayerStyle } from "./PriceDisplayer.style";

type Props = {
  price: number;
}

const PriceDisplayer = ({ price }: Props): JSX.Element => {
  return (
    <Box className={priceDisplayerStyle}>
      {price}€
    </Box>
  )
}

export default PriceDisplayer;