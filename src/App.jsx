import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BuyTicket from './pages/BuyTicket'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import OrderPage from './pages/OrderPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/movies',
    element: <Movies/>
  },
  {
    path: '/movieDetail/:id',
    element: <MovieDetail/>
  },
  {
    path: '/order',
    element: <OrderPage/>
  },
  {
    path: '/buyTicket',
    element: <BuyTicket/>
  },
  {
    path: '/*',
    element: <NotFound/>
  },
  
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App