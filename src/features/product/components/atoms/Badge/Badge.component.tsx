import { Box } from "@mui/material"
import { categoryDisplayerStyle } from "./Badge.style";

type Props = {
  label: string;
  color: string;
}

const Badge = ({ label, color }: Props): JSX.Element => {
  return (
    <Box className={categoryDisplayerStyle} sx={{ backgroundColor: color }}>
      {label}
    </Box>
  )
}

export default Badge;