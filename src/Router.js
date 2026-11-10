import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import RootLayout from "./RootLayout";
import Casual from "./Pages/Casual";
import Formal from "./Pages/Formal";
import Party from "./Pages/Party";
import Gym from "./Pages/Gym";
import ProductDettels from "./Pages/ProductDettels";
import Cart from "./Pages/Cart";
import NewAriveals from "./Components/NewAriveals";


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
        { path: "productdettels/:id", Component: ProductDettels },
                { path: "cartdettels", Component: Cart },
                  { path: "newarrivales", Component: NewAriveals },

    ],
  },
]);