import { BrowserRouter } from "react-router-dom";
import Router from "../pages/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    )
}