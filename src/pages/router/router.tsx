import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { NotFound } from "../NotFound";
import { Team } from "../Team";
import { Customers } from "../Customers";
import { ProductRoutes } from "./ProductRoutes";
import { OrderRoutes } from "./OrderRoutes";
import { RootLayout } from "../layouts/RootLayout";



const renderRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="" element={<Home />} />
                <Route path="/products/*" element={<ProductRoutes />} />
                <Route path="/orders/*" element={<OrderRoutes />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}


const Router = () => {
    return renderRoutes();
};

export default Router;