import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import RootLayout from "./RootLayout";
import Casual from "./Pages/Casual";

export const router = createBrowserRouter([
{
    path: "/",
    Component:RootLayout ,
    children: [
      { index: true, Component: Home},
        { path: "casual", Component: Casual },
      
     
    ],
  },
]);