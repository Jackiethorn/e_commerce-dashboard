import { ProductList } from "../ProductList";
import { NewProduct } from "../NewProduct";
import { Product } from "../Product";
import { NotFound } from "../NotFound";
import { Route, Routes } from "react-router-dom";


export const ProductRoutes = () => {
    return (
        <Routes>
            <Route >
                <Route index element={<ProductList />} />
                <Route path="new" element={<NewProduct />} />
                <Route path=":id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>

    )
}
