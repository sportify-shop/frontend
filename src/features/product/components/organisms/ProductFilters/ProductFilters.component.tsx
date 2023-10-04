import { Box, FormControl, Grid, MenuItem, Select, Slider, TextField } from "@mui/material"
import { UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FilterForm, ProductGender } from "@/features/product/models/product.model";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import CancelButton from "@/common/components/buttons/CancelButton";

type Props = {
  register: UseFormRegister<FilterForm>;
  handleSubmit: UseFormHandleSubmit<FilterForm>;
  onSubmit: any;
  watch: UseFormWatch<FilterForm>;
  setValue: UseFormSetValue<FilterForm>;
  reset: UseFormReset<FilterForm>;
}

const ProductFilters = ({ register, onSubmit, handleSubmit, watch, setValue, reset }: Props): JSX.Element => {
  const gender = watch('gender');
  const categoryId = watch('categoryId');

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} pt={1} pb={1} sx={{ background: "#fff", width: "100%"}}>
      <Grid container padding={3}>
        <Grid container mb={3}>
          <Grid item xs={3}>
            <TextField
              margin="none"
              fullWidth
              id="name"
              label="Rechercher un produit..."
              autoComplete="name"
              autoFocus
              {...register('name')}
            />
          </Grid>
          <Grid item xs={3}>
            <Slider max={999} defaultValue={999} onChange={(e, value) => setValue('maxPrice', value as number)} aria-label="Default" valueLabelDisplay="auto" />
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ minWidth: 1 }}>
              <Select
                labelId="gender"
                id="gender"
                value={gender}
                defaultValue="Unisexe"
                label="sdfsdfsdfsdfsdfsdf"
                {...register('gender')}
              >
                <MenuItem value={'Homme'}>Homme</MenuItem>
                <MenuItem value={'Femme'}>Femme</MenuItem>
                <MenuItem value={'Unisexe'}>Unisexe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ minWidth: 1 }}>
              <Select
                labelId="categoryId"
                id="categoryId"
                value={categoryId}
                defaultValue={1}
                label="Catégorie"
                {...register('categoryId')}
              >
                <MenuItem value={1}>Vestes</MenuItem>
                <MenuItem value={2}>Jeans</MenuItem>
                <MenuItem value={3}>Chemises</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            <CancelButton 
              value={'Retirer les filtres'} 
              onClick={() => reset({
                name: "",
                maxPrice: 999,
                gender: ProductGender.Unisexe,
                categoryId: 1
              })}
            />
          </Grid>
          <Grid item xs={2}>
            <SuccessButton submit value={'Appliquer les filtres'}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductFilters;