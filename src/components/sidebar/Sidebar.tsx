import { Link } from "react-router-dom";
import { sidebarItems } from "../../data/sidebar-items.ts";
import { SidebarItemType } from "../../types/sidebar-items.types.ts";
import { SectionHeader } from "./SidebarItems.tsx";
import { MenuBar } from "./SidebarItems.tsx";
import { LinkItem } from "./SidebarItems.tsx";
import { useState } from "react";



export const Sidebar = () => {

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
            } else if (item.type === "menu-list") {
                return (
                    <div key={item.id} className="sidebar-menu-list">
                        <MenuBar title={item.title} />
                        {item.items && (
                            <ul>
                                {renderSidebarItems(item.items)}
                            </ul>
                        )}
                    </div>
                );
            } else {
                return (
                    <ul key={item.id}>
                        <LinkItem title={item.title} link={item.link} icon={item.icon} />
                    </ul>
                );
            }
        });
    };


    return (
        <div className="sidebar h-screen shadow-lg">
            <div className="sidebar-content flex flex-col items-start ml-3 mr-3">
                <div className="heading mt-5 mb-7">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <div className="sidebar-menu w-full">
                    {renderSidebarItems(sidebarItems)}
                </div>
            </div>
        </div>
    );
}