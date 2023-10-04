import { productCategories } from '@/features/product/mocks';
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemText, ListSubheader, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  closeDialog: () => void;
}

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
        {productCategories.map((cat) => (
          <NavLink to={`/products/categories/${cat.name}`} onClick={() => closeDialog()}>
            <ListItem key={cat.name}>
              <ListItemText primary={<Button> {cat.name}</Button>} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Container>
  );
};
export default CategorySelectorDialog;
