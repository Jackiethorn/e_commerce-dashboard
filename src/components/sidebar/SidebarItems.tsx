import classNames from "classnames";
import { Link } from "react-router-dom";


//UGLY AND PROBABLY UNNECESSARY TYPES HERE. TO BE FIXED LATER
type BaseSidebarItemsPropsType = {
    title: string;
    className?: string;
    icon?: string;
}

type SectionHeaderType = BaseSidebarItemsPropsType & {

}

type MenuBarType = BaseSidebarItemsPropsType & {

}

type LinkItemPropsType = BaseSidebarItemsPropsType & {
    link: string;
    type?: string;
}

const clickableClasses = " focus-within:bg-slate-100 hover:bg-slate-100 cursor-pointer";

export const SectionHeader = ({ title, className }: SectionHeaderType) => {
    const classes = classNames("font-bold text-gray-700", className);
    return (
        <>
            <h2 className={classes}>{title.toUpperCase()}</h2>
        </>
    )
}

export const MenuBar = ({ title, icon }: MenuBarType) => {
    return (
        <div className={clickableClasses + " outline-1 rounded-md mt-1 ml-2 flex items-center justify-between"}>
            <div className="flex py-3 px-2 items-center gap-1">
                <img src={icon} alt="icon" />
                <span className="font-bold text-red-500">{title}</span>
            </div>
            <img src="public/assets/icons/sidebar_link-caret.svg" alt="caret icon" className="mr-2.5" />
        </div>


    )
}

export const LinkItem = ({ title, link, icon, className, type }: LinkItemPropsType) => {
    const iconClasses = classNames("w-5,h-5", {
        "w-3 h-3": type === "sub-menu-item",
    });

    return (
        <li className="sidebar-item outline-1 rounded-md ">
            <Link to={link} className={clickableClasses + " flex py-3 px-2 items-center gap-1"}>
                <img src={icon} alt="icon" className={iconClasses} />
                <span>{title}</span>
            </Link>
        </li>
    )
}