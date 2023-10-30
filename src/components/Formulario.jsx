import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    console.log(e.$d);
    if (e.$d) {
      /* detecta si date picker viene con info */
      setFormData({
        ...formData,
        date: e.$d /* debe quedar como string */,
      });
    } else {
      /* guardar data restos de los campos */
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar el mensaje o procesar los datos
    console.log(formData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", marginTop: 10 }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={4}
          style={{ padding: "30px", borderRadius: 20 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
          >
            Contáctanos
          </Typography>
          <Typography variant="h6">
            Si quieres saber más de nosotros no dudes en escribirnos...
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Correo Electrónico"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              placeholder="+ 56 9 "
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker /* con onchange se guarda fecha seleccionada */
                onChange={handleChange}
                value={formData.date}
                name="date"
              />
            </LocalizationProvider>
            <TextField
              label="Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar Mensaje
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Container>
  );
};
