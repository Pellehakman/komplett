import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Products/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/komponenter/grafikkort",
    element: <ProductPage />,
  },
]);

export default router;
