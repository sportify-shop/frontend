import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form";
import { FilterForm, QueryOrderBy } from "@/features/product/models/product.model";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import CancelButton from "@/common/components/buttons/CancelButton";
import { useGetCategoriesQuery } from "@/features/product/services/categoryApi.service";

type Props = {
  applyFilters: (d: FilterForm) => void;
  refreshFilters: () => void;
}

const ProductFilters = ({ applyFilters, refreshFilters }: Props): JSX.Element => {
  const { data: categories } = useGetCategoriesQuery();
  const {register, handleSubmit, control, reset, setValue} = useForm<FilterForm>({
    values: {
      name: '',
      maxPrice: 999,
      gender: "",
      categoryId: "",
      categoryName: "",
      orderBy: ""
    }
  });

  if (!categories) return <div> erreur </div>;

  return (
    <Box component="form" onSubmit={handleSubmit(applyFilters)} pt={1} pb={1} sx={{ background: "#fff", width: "100%"}}>
      <Grid container padding={2}>
        <Grid container mb={1}>
          <Typography component="p"> Filtrer votre recherche </Typography>
        </Grid>
        <Grid container mb={3}>
          <Grid item xs={4} display="flex" justifyContent="center">
            <TextField
              sx={{ width: 250}}
              margin="none"
              fullWidth
              id="name"
              label="Rechercher un produit..."
              autoComplete="name"
              {...register('name')}
            />
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <FormControl sx={{ width: 250 }}>
              <InputLabel id={"gender"}>Genre</InputLabel>
              <Controller
                name="gender"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <Select
                  sx={{ width: "250px" }}
                  labelId="gender"
                  id="gender"
                  value={field.value}
                  label="Genre"
                  onChange={field.onChange}
                >
                  <MenuItem value={'Homme'}>Homme</MenuItem>
                  <MenuItem value={'Femme'}>Femme</MenuItem>
                  <MenuItem value={'Unisexe'}>Unisexe</MenuItem>              </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
            <FormControl sx={{ width: 250 }}>
              <InputLabel id={"categoryId"}>Catégorie</InputLabel>
              <Controller
                name="categoryId"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <Select
                    sx={{ width: "250px" }}
                    id="categoryId"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {categories.map((category) => (<MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>))}
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} display="flex" justifyContent="center">
            <FormControl sx={{ width: 250 }}>
              <InputLabel htmlFor="orderBy">Prix</InputLabel>
              <Controller
                name="orderBy"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <Select
                    sx={{ width: "250px" }}
                    id="orderBy"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <MenuItem value={QueryOrderBy.ASC}>Croissant</MenuItem>
                    <MenuItem value={QueryOrderBy.DESC}>Décroissant</MenuItem>                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography id="input-slider" sx={{ fontSize: "14px"}}> Prix maximum </Typography>
            <Slider valueLabelDisplay="on" aria-labelledby="input-slider" sx={{ width: 250 }} max={999} defaultValue={999} onChange={(e, value) => setValue('maxPrice', value as number)} aria-label="Default" />
          </Grid>
          <Grid item xs={2}>
            <CancelButton 
              value={'Retirer les filtres'} 
              onClick={() => {
                reset({
                  name: '',
                  maxPrice: 999,
                  gender: "",
                  categoryId: -1,
                  categoryName: "",
                  orderBy: QueryOrderBy.ASC
                })
                refreshFilters()
              }}
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