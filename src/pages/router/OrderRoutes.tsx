import { OrderList } from "../OrderList";
import { Order } from "../Order";
import { NotFound } from "../NotFound";
import { Route, Routes } from "react-router-dom";


export const OrderRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<OrderList />} />
                <Route path=":id" element={<Order />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>

    )
}