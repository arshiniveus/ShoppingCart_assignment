import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Containers/Home'
import Login from './Containers/Login'
import Wishlist from './Containers/Wishlist'
import Cart from './Containers/Cart'
import SuccessPage from './Containers/SuccessPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  }, {
    path: "/cart",
    element: <Cart />,
  }, {
    path: "/success",
    element: <SuccessPage />,
  }

]);

function App () {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


