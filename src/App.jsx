import { createBrowserRouter, Navigate, RouterProvider, ScrollRestoration } from "react-router-dom";
import Layout from "./layout/Layout";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LayoutProfile from "./layout/ProfileLayout";
import LayoutAdmin from "./layout/LayoutAdmin";
import EditProfilePage from "./pages/profile/EditProfilePage";
import OrderHistoryPage from "./pages/profile/OrderHistoryPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import TicketResultPage from "./pages/transactions/TicketResultPage";
import PaymentPage from "./pages/transactions/PaymentPage";
import OrderPage from "./pages/transactions/OrderPage";
import MovieDetailPage from "./pages/transactions/MovieDetailPage";
import DashboardPage from "./pages/admin/DashboardPage";
import MovieAdminPage from "./pages/admin/MovieAdminPage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/HomePage"
import AddMoviePage from "./pages/admin/AddMoviePage"
import EditMoviePage from "./pages/admin/EditMoviePage"

const PrivateRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return currentUser ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/> ,
      },
      {
        path: "/movies",
        element: <MoviesPage/> ,
      },
      {
        path: "/movieDetail/:id",
        element: <MovieDetailPage/> ,
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <OrderPage/>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:queryId",
        element: (
          <PrivateRoute>
            <PaymentPage/>
          </PrivateRoute>
        ),
      },
      {
        path: "/ticket/:queryId",
        element: (
          <PrivateRoute>
            <TicketResultPage/>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "",
    element: <LayoutProfile />,
    children: [
      {
        path: "/account-settings",
        element: (
          <PrivateRoute>
            <EditProfilePage/>
          </PrivateRoute>
        ),
      },
      {
        path: "/order-history",
        element: (
          <PrivateRoute>
            <OrderHistoryPage/>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/dashboard-admin",
        element: <DashboardPage/> ,
      },
      {
        path: "/movies-admin",
        element: <MovieAdminPage/> ,
      },
      {
        path: "/add-movie",
        element: <AddMoviePage/> ,
      },
      {
        path: "/edit-movie/:id",
        element: <EditMoviePage/>
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage/> ,
  },
  {
    path: "/signup",
    element: <RegisterPage/> ,
  },
  {
    path: "/*",
    element: <NotFoundPage/> ,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
