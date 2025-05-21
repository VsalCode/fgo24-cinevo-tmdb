import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuyTicket from "./pages/BuyTicket";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrderPage from "./pages/OrderPage";
import Layout from "./components/Layout";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";

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
        element: <OrderPage/>
      },
      {
        path: "/payment",
        element: <Payment/>
      },
      {
        path: "/ticket",
        element: <TicketResult/>
      },
    ],
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
  return <RouterProvider router={router} />;
};

export default App;
