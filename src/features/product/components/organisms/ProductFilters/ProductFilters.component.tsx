import { Box, FormControl, Grid, MenuItem, Select, Slider, TextField } from "@mui/material"
import { UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch, useForm } from "react-hook-form";
import { FilterForm, ProductGender, QueryOrderBy } from "@/features/product/models/product.model";
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
      gender: ProductGender.Unisexe,
      categoryId: 1,
      categoryName: "T-Shirts",
      orderBy: QueryOrderBy.ASC
    }
  });
  const gender = watch('gender');
  const categoryId = watch('categoryId');
  const orderBy = watch('orderBy');

  if (!categories) return <div> erreur </div>;

  console.log(categories);

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
                {categories.map((category) => (<MenuItem value={category.id}>{category.name}</MenuItem>))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <FormControl sx={{ minWidth: 1 }}>
              <Select
                labelId="orderBy"
                id="orderBy"
                value={orderBy}
                defaultValue={QueryOrderBy.ASC}
                label="Trier les prix"
                {...register('orderBy')}
              >
                <MenuItem value={QueryOrderBy.ASC}>Croissant</MenuItem>
                <MenuItem value={QueryOrderBy.DESC}>Décroissant</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <CancelButton 
              value={'Retirer les filtres'} 
              onClick={() => refreshFilters()}
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