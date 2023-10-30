import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "menu");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getMenu();
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center" }}
        mt={5}
      >
        Encantate con nuestros sabores tradicionales y comparte las experiencia
        con tus amigos!
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {menu.map((plato) => (
          <div key={plato.id}>
            <Container maxWidth="sm">
              <Card
                sx={{
                  width: 350,
                  marginTop: 10,
                  height: 700,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={plato.img}
                    alt={plato.nombre}
                    height="300"
                    sx={{ width: 350 }}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {plato.nombre.toUpperCase()}
                    </Typography>{" "}
                    <Typography variant="subtitle1">
                      {plato.descripcion}
                    </Typography>
                    <Typography variant="h6">
                      Precio: ${plato.precio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      value="null"
                      variant="contained"
                      color="success"
                      size="large"
                    >
                      Añadir
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Container>
          </div>
        ))}
      </div>
    </Box>
  );
};
