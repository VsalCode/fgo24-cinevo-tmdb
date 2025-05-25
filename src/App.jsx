import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuyTicket from "./pages/BuyTicket";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrderPage from "./pages/OrderPage";
import Layout from "./layout/Layout";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AccountSettings from "./pages/AccountSettings";
import LayoutProfile from "./layout/ProfileLayout";
import OrderHistory from './pages/OrderHistory'
import LayoutAdmin from "./layout/LayoutAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";
import MovieAdmin from "./pages/MovieAdmin";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movieDetail/:id",
        element: <MovieDetail />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/ticket",
        element: <TicketResult />,
      },
    ],
  },
  {
    path: "",
    element: <LayoutProfile />,
    children: [
      {
        path: "/account-settings",
        element: <AccountSettings/> ,
      },
      {
        path: "/order-history",
        element: <OrderHistory/> ,
      },
    ],
  },
  {
    path: "",
    element: <LayoutAdmin/>,
    children: [
      {
        path: "/dashboard-admin",
        element: <DashboardAdmin/> ,
      },
      {
        path: "/movies-admin",
        element: <MovieAdmin/> ,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/buyTicket",
    element: <BuyTicket />,
  },
  {
    path: "/*",
    element: <NotFound />,
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
