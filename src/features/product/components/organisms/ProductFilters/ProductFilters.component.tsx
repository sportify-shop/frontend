import { Box, FormControl, Grid, MenuItem, Select, Slider, Stack } from "@mui/material"
import SearchBar from "../../molecules/SearchBar/SearchBar.component";
import { useState } from "react";

type Props = {
  setSearchBarValue: React.Dispatch<React.SetStateAction<string>>;
  setPriceMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const ProductFilters = ({ setSearchBarValue, setPriceMaxValue }: Props): JSX.Element => {
  return (
    <Box mr={1} pt={4} pb={4} sx={{ background: "#fff", width: "100%"}}>
      <Grid container>
        <Grid item xs={3}>
          <SearchBar setSearchBarValue={setSearchBarValue} />
        </Grid>
        <Grid item xs={3}>
          <Slider max={999} defaultValue={999} onChange={(e, value) => setPriceMaxValue(value as number)} aria-label="Default" valueLabelDisplay="auto" />
        </Grid>
        <Grid item xs={3}>
          Filtre de genre
        </Grid>
        <Grid item xs={3}>
          Filtre de catégorie
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductFilters;