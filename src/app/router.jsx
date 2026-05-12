import {
  createBrowserRouter,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "../pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },


    ],
  },
]);

export default router;