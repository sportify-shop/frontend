import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Avatar, Box, Container, FormControl, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import { ProductRequest, addProductFormSchema } from '@/features/product/models/product.model';
import { usePostProductMutation } from '@/features/product/services/productApi.service';
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";

const AddProductForm: React.FC = () => {
  const {register, handleSubmit, reset, watch, formState: { errors }} = useForm<ProductRequest>({ resolver: yupResolver(addProductFormSchema) });
  const [productPost, {isError, error, isSuccess, data}] = usePostProductMutation();
  const navigate = useNavigate();

  const gender = watch('gender');

  useEffect(() => {
    if (!isSuccess || !data) return;
    navigate('/products/categories/T-shirts');
  }, [isSuccess, data]);

  const submit = (d: ProductRequest) => {
    if (isError) return;
    const {name, description, quantity, price, gender, imageSlug, categoryId, subCategoryId} = d;

    const data: ProductRequest = {
      name, 
      description, 
      quantity, 
      price, 
      gender, 
      imageSlug, 
      categoryId, 
      subCategoryId
    }

    console.log(data);

    // productPost(data);
  }

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
            <Typography variant="h2">
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
              autoFocus
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
              autoFocus
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
              autoFocus
              {...register('price')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <FormControl sx={{ minWidth: 1 }}>
              <Select
                error={errors.gender && true}
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
              {errors.gender && <Typography component="p" color="error" ml={2}>{errors.gender.message}</Typography>}
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
              autoFocus
              {...register('imageSlug')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              error={errors.categoryId && true}
              helperText={errors.categoryId?.message}
              margin="normal"
              required
              fullWidth
              id="categoryId"
              label="ID de la catégorie"
              autoComplete="categoryId"
              autoFocus
              {...register('categoryId')}
            />
          </Grid>
          <Grid item>
            <SuccessButton submit value={'Créer le produit'}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddProductForm;
