import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Slider, TextField } from "@mui/material"
import { useForm } from "react-hook-form";
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
  const {register, handleSubmit, reset, watch, setValue} = useForm<FilterForm>({
    values: {
      name: '',
      maxPrice: 999,
      gender: "",
      categoryId: -1,
      categoryName: "",
      orderBy: ""
    }
  });
  const gender = watch('gender');
  const categoryId = watch('categoryId');
  const orderBy = watch('orderBy');

  if (!categories) return <div> erreur </div>;

  return (
    <Box component="form" onSubmit={handleSubmit(applyFilters)} pt={1} pb={1} sx={{ background: "#fff", width: "100%"}}>
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
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel htmlFor="gender">Genre</InputLabel>
              <Select
                labelId="gender"
                id="gender"
                value={gender}
                defaultValue={""}
                label="Genre"
                {...register('gender')}
              >
                <MenuItem value={""}>Aucun</MenuItem>
                <MenuItem value={'Homme'}>Homme</MenuItem>
                <MenuItem value={'Femme'}>Femme</MenuItem>
                <MenuItem value={'Unisexe'}>Unisexe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ minWidth: 1 }}>
              <InputLabel htmlFor="categoryId">Type</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                value={categoryId}
                defaultValue={-1}
                label="Catégorie"
                {...register('categoryId')}
              >
                <MenuItem value={""}>Aucun</MenuItem>
                {categories.map((category) => (<MenuItem value={category.id}>{category.name}</MenuItem>))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel htmlFor="orderBy">Prix</InputLabel>
              <Select
                labelId="orderBy"
                id="orderBy"
                value={orderBy}
                defaultValue={QueryOrderBy.ASC}
                label="Trier les prix"
                {...register('orderBy')}
              >
                <MenuItem value="">Aucun</MenuItem>
                <MenuItem value={QueryOrderBy.ASC}>Croissant</MenuItem>
                <MenuItem value={QueryOrderBy.DESC}>Décroissant</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
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