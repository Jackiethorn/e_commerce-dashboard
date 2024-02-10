import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/Footer";

export const RootLayout = () => {
    return (
        <div className="min-h-dvh bg-colors-background grid grid-cols-6 grid-rows-auto">
            <aside className="col-span-1 row-span-3 mr-7">
                <Sidebar />
            </aside>

            <header className="col-span-5 mr-4 mb-7">
                <Navbar />
            </header>


            <main className="col-span-5 row-span-1 mr-4">
                <Outlet />
            </main>

            <div className="footer col-span-6">
                <Footer />
            </div>
        </div>
    );
};
