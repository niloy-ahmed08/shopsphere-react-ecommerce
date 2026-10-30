import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import RootLayout from "./RootLayout";
import Casual from "./Pages/Casual";
import Formal from "./Pages/Formal";
import Party from "./Pages/Party";
import Gym from "./Pages/Gym";

export const router = createBrowserRouter([
{
    path: "/",
    Component:RootLayout ,
    children: [
      { index: true, Component: Home},
        { path: "casual", Component: Casual },
     { path: "formal", Component: Formal },
     { path: "party", Component: Party },
          { path: "gym", Component: Gym },
    ],
  },
]);