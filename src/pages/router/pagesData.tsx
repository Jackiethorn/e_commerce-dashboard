import { Home } from "../Home";
import { Products } from "../Products";
import { OrderHistory } from "../OrderHistory";
import { Customers } from "../Customers";
import { Team } from "../Team";
import { routerType } from "../../types/router.types";

const pagesData: routerType[] = [
    {
        path: "",
        element: <Home />,
        title: "Home",
    },
    {
        path: "products",
        element: <Products />,
        title: "Products",
    },
    {
        path: "order-history",
        element: <OrderHistory />,
        title: "Order History",
    },
    {
        path: "customers",
        element: <Customers />,
        title: "Customers",
    },
    {
        path: "team",
        element: <Team />,
        title: "Team",
    }
];

export default pagesData;