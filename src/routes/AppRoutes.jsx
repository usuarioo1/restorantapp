import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Menu } from "../views/Menu";
import { QuienesSomos } from "../views/QuienesSomos";
import { Portada } from "../components/Portada";
import { Contacto } from "../views/Contacto";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path="/"
          element={<Portada />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/about"
          element={<QuienesSomos />}
        />

        <Route
          path="/contact"
          element={<Contacto />}
        />
      </Route>
    </Routes>
  );
};
