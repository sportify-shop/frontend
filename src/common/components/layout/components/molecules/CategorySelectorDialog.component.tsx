import { Box, Container, Divider, Grid, List, ListItem, ListItemText, ListSubheader, Stack } from '@mui/material';
import React from 'react';

interface Props {
  closeDialog: () => void;
}

const categories: String[] = [
  "T-shirts",
  "Chemises",
  "Pulls",
  "Sweat-shirts",
  "Vestes",
  "Manteaux",
  "Pantalons",
  "Jeans",
  "Shorts",
  "Jupes",
  "Robes",
  "Costumes",
  "Survêtements",
  "Maillots de bain",
  "Lingerie",
  "Soutiens-gorge",
  "Culottes",
  "Pyjamas",
  "Chaussettes",
  "Collants",
  "Blazers",
  "Chemisiers",
  "Pantalons de costume",
  "Blouses",
  "Tops",
  "Combinaisons",
  "Vêtements de nuit",
  "Tuniques",
  "Cardigans"
];

const CategorySelectorDialog = ({ closeDialog }: Props) => {
  return (
    <Container>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 500,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {categories.map((cat) => (
          <ListItem key={cat.toString()}>
            <ListItemText primary={`${cat}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
export default CategorySelectorDialog;
