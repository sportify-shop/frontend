import React from 'react';
import {useForm} from "react-hook-form";
import {Avatar, Box, Grid, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {UserRequest} from "@/features/user/models/user";
import {usePostUserMutation} from "@/features/user/api";
import {NavLink} from "react-router-dom";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import ErrorSnackbar from "@/common/components/appSnackbars/ErrorSnackbar";

const RegisterForm: React.FC = () => {
  const {register, handleSubmit, reset} = useForm<UserRequest>();
  const [userPost, {error, isError}] = usePostUserMutation();

  const onSubmit = (d: UserRequest) => {
    const {
      email,
      password,
      repeat_password,
    } = d;

    const data: UserRequest = {
      email,
      password,
      repeat_password,
    }

    userPost(data);
  }

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
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
              <LockOutlinedIcon/>
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h2">
              Créer un compte
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="p" variant="inherit">
              Déjà un compte ? <NavLink to="/login"><u>Je me connecte</u></NavLink> !
            </Typography>
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              autoComplete="email"
              {...register('email')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Répéter mot de passe"
              type="password"
              id="repeat_password"
              autoComplete="current-password"
              {...register('repeat_password')}
            />
          </Grid>
          <Grid item>
            <SuccessButton submit value={'Inscription'}/>
          </Grid>
        </Grid>
      </Box>

      {/* @ts-ignore */}
      <ErrorSnackbar open={isError} message={error?.data.message} />
    </>
  );
};

export default RegisterForm;
