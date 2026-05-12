import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "../pages/HomePage";
import ComponentsLayout from "./layouts/ComponentsLayout";
import ButtonPage from "../components/button/Button";
import CardPage from "../components/card/Card";
import OverviewPage from "./components/componentpage/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "components/",
        element: <ComponentsLayout />,
        children: [
          {
            index: true,
            element: <OverviewPage/>,
          },
           {
            path: "card",
            element: <CardPage />,
          },
            {
            path: "button",
            element: <ButtonPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
