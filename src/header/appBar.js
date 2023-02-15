import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Img from "../img/mini-symbolics.png";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useTheme, styled } from "@mui/material/styles";
import { border } from "@mui/system";
import { Link } from "react-router-dom";

const pages = ["Home", "Gallery", "Contact", "Menu"];
const names = ["Главная", "Галерея", "Контакты", "Меню"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerWidth = 241;

function AppBarExample() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Box textAlign="center" sx={{ flexGrow: 1, marginBottom: 3 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Container maxWidth="lg">
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                  <Typography
                    noWrap
                    component="div"
                    sx={{ mr: 2, mt: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <Link
                      component={Link}
                      to={`/body/Home`}
                      href="#"
                      color="inherit"
                    >
                      <img src={Img} />
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {names.map((name, id) => (
                      <Button
                        component={Link}
                        to={`/body/${pages[id]}`}
                        sx={{
                          my: 2,
                          px: 2,
                          color: "white",
                          display: "block",
                        }}
                      >
                        {name}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        sx={{
          width: DrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DrawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose();
        }}
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <AcUnitOutlinedIcon />
            ) : (
              <AddRoundedIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((link, index) => {
            return (
              <ListItem
                button
                component={Link}
                to={`/body/${link}`}
                key={index}
              >
                <ListItemIcon>
                  {index & (2 === 0) ? (
                    <AcUnitOutlinedIcon />
                  ) : (
                    <AddRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={names[index]} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default AppBarExample;
