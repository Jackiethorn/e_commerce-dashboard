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

// const productRoutes: routerType[] = [
//     {
//         path: "",
//         element: <Home />,
//         title: "Home",
//     },
//     {
//         path: "products",
//         element: <Products />,
//         title: "Products",
//         children: [
//             {
//                 path: "new",
//                 element: <AddProduct />,
//                 title: "Add Product"
//             },
//             {
//                 path: ":id",
//                 element: <Product />,
//                 title: "Product"
//             },
//         ]
//     },
//     {
//         path: "order-history",
//         element: <OrderHistory />,
//         title: "Order History",
//     },
//     {
//         path: "customers",
//         element: <Customers />,
//         title: "Customers",
//     },
//     {
//         path: "team",
//         element: <Team />,
//         title: "Team",
//     },
//     {
//         path: "*",
//         element: <NotFound />,
//         title: "Not Found",
//     }
// ];

