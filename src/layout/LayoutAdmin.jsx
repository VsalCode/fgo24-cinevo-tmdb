import { Outlet, Navigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const LayoutAdmin = () => {
  const checkAdminLogin = useSelector((state) => state.auth.adminLogin);
  const checkUserLogin = useSelector((state) => state.auth.currentUser);

  if(checkUserLogin !== null){
    toast.error("You must login as admin!");
    return <Navigate to="/" replace />
  }

  if (checkAdminLogin === null ) {
    toast.error("You must login as admin!");
    return <Navigate to="/login" replace />
  }

  return (
    <main className="bg-primary h-fit py-30 flex-center flex-col gap-7 sm:px-10 px-7">
      <Toaster />
      <NavbarAdmin />
      <Outlet />
    </main>
  );
};

export default LayoutAdmin;
