import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Store from "../store";
import ErrorPage from "../components/errorPage";
import Products from "../components/productComponents/products.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/store/products/:productId",
    element: <Products />,
  },
]);
