import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import DeliveryPage from './pages/DeliveryPage'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom'
import { productsData } from './api/Api'
import UserPage from './pages/UserPage'

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: productsData
      },
      {
        path: "/delivery",
        element: <DeliveryPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: productsData
      },
      {
        path: "/user",
        element: <UserPage />,
      }
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
