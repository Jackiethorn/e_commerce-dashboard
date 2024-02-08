import { Link } from "react-router-dom";
import { sidebarItems } from "../data/sidebar-items.ts";
import { SidebarItemType } from "../types/sidebar-items.types";

export const Sidebar = () => {


    const flattenSidebarData = (data: SidebarItemType[]): SidebarItemType[] => {
        return data.flatMap((item) => {
            const { items } = item;
            const currentItem = [{ ...item }];

            if (items) {
                return currentItem.concat(flattenSidebarData(items));
            }

            return currentItem;
        });
    };


    const renderSidebarItems = (items: SidebarItemType[]) => {
        return flattenSidebarData(items).map((item) => {
            if (item.type === "sub-header") {
                return (
                    <div key={item.id} className="sidebar-sub-header">
                        <h2 className="text-sm font-bold text-gray-500">{item.title} </h2>
                    </div>
                );
            } else {
                return (
                    <ul key={item.id}>
                        <li className="sidebar-item">
                            <Link to={item.link} className="sidebar-item">
                                <img src={item.icon} alt={item.title} />
                            </Link>
                        </li>
                    </ul>

                );
            }
        });
    }




    return (
        <div className="sidebar w-64 h-screen border-red-700">
            <div className="sidebar-content">
                <div className="heading">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <div className="sidebar-menu">

                </div>
                {renderSidebarItems(sidebarItems)}
            </div>
        </div>
    );
}