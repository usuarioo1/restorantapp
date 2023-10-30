import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box xl={{ width: "100%" }}>
      <AppBar
        sx={{
          alignItems: "center",
          position: "static",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ alignItems: "center", display: "flex" }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/513/544/original/chopsticks-illustration-eastern-traditional-cuisine-png.png"
              alt="logo"
              width="100"
              height="100"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Typography
              variant="h3"
              sx={{ marginLeft: 1, color: "white" }}
            >
              Asia Bite
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Typography
              variant="h6"
              as={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
                display: { xs: "none", md: "block" },
              }}
            >
              Inicio
            </Typography>
            <Typography
              variant="h6"
              as={Link}
              to="/about"
              sx={{
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
                display: { xs: "none", md: "block" },
              }}
            >
              Conócenos
            </Typography>
            <Typography
              variant="h6"
              as={Link}
              to="/menu"
              sx={{
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
                display: { xs: "none", md: "block" },
              }}
            >
              Menú
            </Typography>
            <Typography
              variant="h6"
              as={Link}
              to="/contact"
              sx={{
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
                display: { xs: "none", md: "block" },
              }}
            >
              Contáctanos
            </Typography>
            <Typography
              variant="h6"
              as={Link}
              to="/reservations"
              sx={{
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
                display: { xs: "none", md: "block" },
              }}
            ></Typography>
          </Box>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleMenu}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/"
          >
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/about"
          >
            <ListItemText primary="Conócenos" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/menu"
          >
            <ListItemText primary="Menú" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
          >
            <ListItemText primary="Contáctanos" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/reservations"
          >
            <ListItemText primary="Reservas" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
