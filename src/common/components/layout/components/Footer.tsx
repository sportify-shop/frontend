import * as React from 'react';
import {Box, Divider, Grid, List, ListItem, Typography} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import {NavLink} from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#000',
        color: '#fff'
      }}
    >
      <Box sx={{p: 5}}>
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Typography
              variant="h6"
              sx={{
                mr: 4,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                mb: 2
              }}
            >
              SPORTIFY
            </Typography>
            <Typography sx={{fontSize: "14px !important"}}>
            Vente de vêtements de sport et plateforme en ligne dédiée à la commercialisation de vêtements et d'accessoires spécialement conçus pour les activités sportives. 
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <List
              subheader={
                <>
                  <Typography variant="h4">Liens utiles</Typography>
                  <Divider sx={{width: '100px', background: "#c0c0c0", mt: 2, mb: 2}}/>
                </>
              }>
              <ListItem><NavLink to="/">Accueil</NavLink></ListItem>
              <ListItem><NavLink to="/products">Nos produits</NavLink></ListItem>
            </List>
          </Grid>
          <Grid item sm={4}>
            <List
              subheader={
                <>
                  <Typography variant="h4">Informations pratiques</Typography>
                  <Divider sx={{width: '100px', background: "#c0c0c0", mt: 2, mb: 2}}/>
                </>
              }>
              <ListItem>
                <LocationOnIcon sx={{mr: 1}}/> 25 Rue des Cerisiers
                <br/>13100 AIX-EN-PROVENCE
              </ListItem>
              <ListItem>
                <AccessTimeIcon sx={{mr: 1}}/> Période d'ouverture :
                <br/>du 03/04/2023 au 30/09/2023
              </ListItem>
              <ListItem>
                <CallIcon sx={{mr: 1}}/> +33(0)4 90 61 74 08
              </ListItem>
              <ListItem>
                <MailIcon sx={{mr: 1}}/> contact@sportify-shop.com
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: '#0E0E0E',
          display: 'flex',
          justifyContent: 'center',
          pt: 3,
          pb: 3
        }}
      >
        <Typography sx={{ fontSize: "14px !important", fontWeight: "500", textAlign: 'center' }}>
          Tous droits réservés | © Sportify | Développé par Eric, Hugo et Ludovic
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;