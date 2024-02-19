import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/Footer";
import { useLayoutEffect, useState } from "react";

export const RootLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    //TODO: AT THE MOMENT, I AM NOT AWARE OF THE PERFORMANCE IMPLICATIONS OF USELAYOUTEFFECT. CALCULATING THE VALUE AT 
    //RENDER MIGHT BE BETTER OPTION. ALSO RIGHT NOW EFFECT RUNS ON EVERY RESIZE, WHICH MIGHT BE UNNECESSARY. WORTH CHECKING OUT LATER.
    useLayoutEffect(() => {
        const handleResize = () => {
            // Adjust sidebar state based on screen size
            const isLargeScreen = window.innerWidth >= 1280;
            setIsSidebarOpen(isLargeScreen);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-dvh grid grid-cols-6 auto-rows-min grid-rows-auto text-black relative">
            <aside className={`w-fit xl:w-auto col-span-1 row-span-3 mr-7 ${isSidebarOpen ? "relative" : "xl:absolute"} z-50 backdrop-blur-md backdrop-contrast-200 xl:backdrop-blur-none xl:backdrop-contrast-100`}>
                <Sidebar isSidebarOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
            </aside>

            <header className={`col-span-full xl:col-span-5 row-end-auto mr-4 mb-7 ml-4 xl:ml-0 ${isSidebarOpen ? "col-start-2" : ""}`}>
                <Navbar onSidebarToggle={handleSidebarToggle} />
            </header>


            <main className={`col-span-5 row-span-1 mr-4 bg-colors-background ml-4 xl:ml-0 relative z-1`}>
                <Outlet />
            </main>

            <div className="footer col-span-6 relative">
                <Footer />
            </div>
        </div>
    );
};
