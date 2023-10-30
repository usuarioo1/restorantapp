import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const QuienesSomos = () => {
  const JumbotronContainer = styled("div")({
    position: "relative",
    width: "100%",
    height: "auto",
  });

  const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  });

  const TextOverlay = styled("div")({
    position: "absolute",
    borderRadius: 20,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  });

  const TextContainer = styled("div")({
    maxWidth: "auto",
    padding: "20px",
    textAlign: "center",
  });

  const ResponsiveText = styled(Typography)`
    font-size: 24px; // Tamaño de fuente predeterminado

    @media (max-width: 768px) {
      font-size: 18px; // Tamaño de fuente más pequeño para pantallas estrechas
    }
  `;

  return (
    <Box mt={3}>
      <JumbotronContainer>
        <Img
          src="https://a.cdn-hotels.com/gdcs/production50/d1916/51d76cc9-cbe8-4572-a671-545f882f1847.jpg"
          alt="comida"
        />
        <TextOverlay>
          <TextContainer>
            <Typography variant="h3">Quienes Somos</Typography>
            <ResponsiveText variant="h4">
              En Asia Bite, nos apasiona ofrecer una auténtica experiencia
              culinaria coreana. Nuestra cocina está inspirada en siglos de
              tradición y sabor, desde el delicioso bulgogi, maridado a la
              perfección, hasta el tteokbokki picante y reconfortante.
            </ResponsiveText>
          </TextContainer>
        </TextOverlay>
      </JumbotronContainer>
    </Box>
  );
};
