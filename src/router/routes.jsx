import { createBrowserRouter } from "react-router";
import HomeView from "../pages/public/public_Home/HomeView";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
    ],
  },
]);
