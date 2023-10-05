import React from 'react';
import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

type Props = {
  isAuthenticated: boolean;
}

const LoginButton = styled(Button)<ButtonProps>({
  color: "#fff !important",
  backgroundColor: "#007DBC",
  '&:hover': {
    backgroundColor: "#007DBC",
  },
});

const Header = ({ isAuthenticated }: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={0} sx={{ background: "#fff", borderBottom: "1px solid lightgray"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to={'/'}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 4,
                  display: {xs: 'none', md: 'flex'},
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                SPORTIFY
              </Typography>
            </NavLink>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: 'block', md: 'none'},
                }}
              >
                <NavLink to="/products">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Nos produits</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="/cart">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Mon panier</Typography>
                  </MenuItem>
                </NavLink>
              </Menu>
            </Box>
            <NavLink to={'/'}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 4,
                  display: {xs: 'flex', md: 'none'},
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                SPORTIFY
              </Typography>
            </NavLink>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              <NavLink to={'/products'}>
                <Button
                  sx={{my: 2, color: 'black', display: 'block'}}
                >
                  Nos produits
                </Button>
              </NavLink>
            </Box>
            <Box sx={{flexGrow: 0}}>
              <NavLink to="/cart">
                <Typography component="a" sx={{ textDecoration: "underline"}} mr={4}>Mon panier</Typography>
              </NavLink>
              <NavLink to="/products/add">
                <LoginButton startIcon={<AddIcon/>}> Ajouter un produit </LoginButton>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;