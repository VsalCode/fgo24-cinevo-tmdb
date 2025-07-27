import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <main className="bg-primary text-white">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </main>
  );
};

export default Layout;
