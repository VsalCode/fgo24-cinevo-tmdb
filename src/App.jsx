import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Movie from './pages/Movie'
import BuyTicket from './pages/BuyTicket'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/movies',
    element: <Movie/>
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