import { sidebarItems } from "../../resources/data/sidebar-items.ts";
import { SidebarItemType } from "../../types/sidebar-items.types.ts";
import { SectionHeader } from "./SidebarItems.tsx";
import { MenuBar } from "./SidebarItems.tsx";
import { LinkItem } from "./SidebarItems.tsx";
import { useState } from "react";

type SidebarProps = {
    isSidebarOpen: boolean;
    onSidebarToggle: (isSidebarOpen: boolean) => void;
};


export const Sidebar = ({ isSidebarOpen, onSidebarToggle }: SidebarProps) => {
    //TODO: CURRENT ACTIVE TAB IMPLEMENTATION IS NOT OPTIMAL. REFACTOR IT SO THAT IT CAN WORK EVEN WHEN ROUTE
    //IS CHANGED BY HAND OR WHEN THE COMPONENT IS REMOUNTED. ALSO A LOT OF PROP DRILLING IS HAPPENING, USING CONTEXT IS AN IDEA.
    const [activeTab, setActiveTab] = useState("");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleCloseSidebar = () => {
        onSidebarToggle(!isSidebarOpen);
    }

    const sidebarClasses = `sidebar h-screen w-fit xl:w-full xl:w-auto shadow-lg bg-colors-foreground ${isSidebarOpen ? "block" : "hidden"} z-50 sticky top-0 backdrop-blur-md backdrop-contrast-200 xl:backdrop-blur-none xl:backdrop-contrast-100`

    const renderSidebarItems = (items: SidebarItemType[]) => {
        return items.map((item) => {
            if (item.type === "section-header") {
                return (
                    <div key={item.id} className="sidebar-sub-header mt-5">
                        <SectionHeader title={item.title} />
                        {item.items && (
                            <ul>
                                {renderSidebarItems(item.items)}
                            </ul>
                        )}
                    </div>
                );
            }
            else if (item.type === "menu-list") {
                return (
                    <div key={item.id} className="sidebar-menu-list">
                        <MenuBar title={item.title} icon={item.icon} items={item.items}
                            activeTab={activeTab} onTabChange={handleTabClick} />
                    </div>
                );
            } else {
                return (
                    <ul key={item.id} className="mt-1 xl:ml-2">
                        <LinkItem title={item.title} link={item.link} icon={item.icon}
                            type={item.type} activeTab={activeTab} onTabChange={handleTabClick} />
                    </ul>
                );
            }
        });
    };


    return (
        <div className={sidebarClasses + " relative text-primary_clamp"}>
            <div className="sidebar-content flex flex-col items-start ml-3 mr-3">
                <div className="heading mt-5 mb-5">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <img onClick={handleCloseSidebar} className="xl:hidden absolute right-1 top-0 hover:cursor-pointer" src="/assets/icons/sidebar_link-close.svg" alt="close sidebar" />
                </div>
                <div className="sidebar-menu w-full">
                    {renderSidebarItems(sidebarItems)}
                </div>
            </div>
        </div>
    );
}