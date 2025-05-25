import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <main className="bg-primary text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
