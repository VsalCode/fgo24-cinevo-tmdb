import { Outlet, Navigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const LayoutAdmin = () => {
  const checkAdminLogin = useSelector((state) => state.auth.adminLogin);

  if (checkAdminLogin === null) {
    toast.error("You must login as admin!");
    return <Navigate to="/login" />
  }

  return (
    <>
      <Toaster />
      <NavbarAdmin />
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
