import {
  Container,
  Grid,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";

export const Footer = () => {
  const theme = useTheme();
  const navBarBackgroundColor = theme.palette.primary.main; // Obtiene el color de fondo de la barra de navegación

  return (
    <Container
      component="footer"
      maxWidth="xxl"
      sx={{
        marginTop: 3,
        backgroundColor: navBarBackgroundColor, // Usa el color de fondo de la barra de navegación
        width: "100%", // Ancho 100%
        padding: "20px 0", // Espaciado en la parte superior e inferior
      }}
    >
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Container sx={{ marginTop: 3 }}>
            <Typography
              variant="h5"
              sx={{ color: "white" }}
            >
              Visítanos en:
            </Typography>

            <LocationOnOutlinedIcon sx={{ color: "white", marginTop: 2 }} />
            <Typography
              variant="h6"
              sx={{ color: "white" }}
            >
              {" "}
              Calle las esculturas #3559, Santiago{" "}
            </Typography>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Container sx={{ marginTop: 3 }}>
            <Typography
              variant="h5"
              sx={{ color: "white" }}
            >
              Conoce nuestros convenios:
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", marginTop: 2 }}
            >
              Conoce tus beneficios pagando con CardBank
            </Typography>

            <Typography
              as={Link}
              to="/contact"
              variant="h6"
              sx={{ color: "white" }}
            >
              Hazte Socio
            </Typography>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Container>
            <Typography
              variant="h5"
              sx={{ color: "white", marginTop: 4 }}
            >
              Síguenos
            </Typography>
            <IconButton
              href="#"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "white", fontSize: 70 }} />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              sx={{ color: "white" }}
            >
              <InstagramIcon sx={{ color: "white", fontSize: 70 }} />
            </IconButton>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
