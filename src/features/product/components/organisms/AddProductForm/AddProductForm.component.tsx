import React, {useEffect} from 'react';
import {Controller, useForm} from "react-hook-form";
import {Avatar, Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import { ProductGender, ProductRequest, addProductFormSchema } from '@/features/product/models/product.model';
import { usePostProductMutation } from '@/features/product/services/productApi.service';
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { useGetCategoriesQuery } from '@/features/product/services/categoryApi.service';

const AddProductForm: React.FC = () => {
  const { data: categories } = useGetCategoriesQuery();
  const {register, handleSubmit, control, formState: { errors }} = useForm<ProductRequest>({ resolver: yupResolver(addProductFormSchema), mode: "all"});
  const [productPost, {isError, isSuccess}] = usePostProductMutation();
  const navigate = useNavigate();

  const submit = (d: ProductRequest) => {
    if (isError) return;

    const {name, description, quantity, price, gender, imageSlug, category_id} = d;

    const data: ProductRequest = {
      name, 
      description, 
      quantity, 
      price, 
      gender, 
      imageSlug, 
      category_id
    }

    productPost(data);
    navigate('/products');
  }

  useEffect(() => {
    if (isSuccess) navigate('/products');
  }, [isSuccess]);

  if (!categories) return <div> Erreur </div>;

  return (
    <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      noValidate
      sx={{ maxWidth: 750, display: 'block', flexGrow: 1 }}
      >
        <Grid
          container
          maxWidth="xs"
          spacing={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
              <AddIcon/>
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h2" mb={2}>
              Ajouter un produit
            </Typography>
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              error={errors.name && true}
              helperText={errors.name?.message}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nom"
              autoComplete="name"
              autoFocus
              {...register('name')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              error={errors.description && true}
              helperText={errors.description?.message}
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              autoComplete="description"
              {...register('description')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              error={errors.quantity && true}
              helperText={errors.quantity?.message}
              margin="normal"
              type='number'
              required
              fullWidth
              id="quantity"
              label="Quantité disponible"
              autoComplete="quantity"
              {...register('quantity')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              error={errors.price && true}
              helperText={errors.price?.message}
              margin="normal"
              type='number'
              required
              fullWidth
              id="price"
              label="Prix (€)"
              autoComplete="price"
              {...register('price')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <FormControl sx={{width: '100%'}}>
              <InputLabel id={"gender"}>Genre</InputLabel>
              <Controller
                name="gender"
                control={control}
                defaultValue={ProductGender.Unisexe}
                render={({ field }) => (
                  <Select
                    sx={{ width: "100%" }}
                    labelId="gender"
                    id="gender"
                    value={field.value}
                    label="Catégorie"
                    onChange={field.onChange}
                >
                  <MenuItem value={'Homme'}>Homme</MenuItem>
                  <MenuItem value={'Femme'}>Femme</MenuItem>
                  <MenuItem value={'Unisexe'}>Unisexe</MenuItem>              </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              error={errors.imageSlug && true}
              helperText={errors.imageSlug?.message}
              margin="normal"
              required
              fullWidth
              id="imageSlug"
              label="Lien de l'image"
              autoComplete="imageSlug"
              {...register('imageSlug')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <FormControl sx={{width: '100%'}}>
              <InputLabel id={"category_id"}>Catégorie</InputLabel>
              <Controller
                name="category_id"
                control={control}
                defaultValue={categories[0].id}
                render={({ field }) => (
                  <Select
                  sx={{ width: "100%" }}
                  labelId="category_id"
                  id="category_id"
                  value={field.value}
                  label="Catégorie"
                  onChange={field.onChange}
                >
                  {categories.map((category) => (<MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>))}
                </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item mt={3}>
            <SuccessButton submit value={'Créer le produit'}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddProductForm;
