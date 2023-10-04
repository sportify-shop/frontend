import { Box, Grid, Slider, Stack } from "@mui/material"
import SearchBar from "../../molecules/SearchBar/SearchBar.component";
import { useState } from "react";

const ProductFilters: React.FC = (): JSX.Element => {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <Box mr={1} pt={4} pb={4} sx={{ background: "#fff", width: "100%"}}>
      <Grid container>
        <Grid item xs={3}>
          <SearchBar setSearchBarValue={setSearchBarValue} />
        </Grid>
        <Grid item xs={3}>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductFilters;