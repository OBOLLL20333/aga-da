import * as React from "react";
import { Container, List, ListItem, ListItemText } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Img from "../img/mini-symbolics.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const pages = ["Home", "Gallery", "Contact", "Menu"];
const names = ["Главная", "Галерея", "Контакты", "Меню"];

export default function BottomBar() {
  return (
    <footer>
      <Box
        textAlign="center"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="XL">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box fontSize="1.2em">Навигация</Box>
              {names.map((name, id) => (
                <Box pt={{ xs: 5, sm: 2 }}>
                  <Box
                    component={Link}
                    to={`/body/${pages[id]}`}
                    underline="hover"
                    color="inherit"
                  >
                    {name}
                  </Box>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box fontSize="1.2em">Контакты</Box>
              <Box pb={{ xs: 3, sm: 2 }} pt={{ xs: 5, sm: 2 }}>
                <Box
                  component={Link}
                  underline="hover"
                  href="mailto:mail@tulatoz.ru"
                  color="inherit"
                >
                  +7 (4872) 32-14-99
                </Box>
              </Box>
              <Box pb={{ xs: 3, sm: 2 }}>
                <Box
                  component={Link}
                  href="mailto:mail@tulatoz.ru"
                  underline="hover"
                  color="inherit"
                >
                  mail@tulatoz.ru
                </Box>
              </Box>
              <Box pb={{ xs: 3, sm: 2 }}>
                <Box>300002, г. Тула, ул. Советская, 1 А</Box>
              </Box>
            </Grid>
            <Grid alignSelf="center" item xs={12} sm={4}>
              <Box>
                <Box
                  component={Link}
                  to={`/body/Home`}
                  href="#"
                  color="inherit"
                >
                  <img src={Img} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            fontSize="1.2em"
            textAlign="center"
            pt={{ xs: 5, sm: 5 }}
            pb={{ xs: 5, sm: 0 }}
          >
            © 1712-2022 ПАО «Императорский Тульский оружейный завод»
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
