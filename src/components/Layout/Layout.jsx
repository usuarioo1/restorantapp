import { NavBar } from "../NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
