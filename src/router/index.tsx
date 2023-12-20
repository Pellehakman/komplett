import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeSreen from "../screens/HomeScreen/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSreen />,
  },
]);

export default router;
