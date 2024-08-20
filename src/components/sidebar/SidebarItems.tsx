import classNames from "classnames";
import { Link } from "react-router-dom";
import { SidebarItemType } from "@/types/sidebar-items.types";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";


type BaseSidebarItemProps = {
    title: string;
    className?: string;
    link?: string;
    type?: string;
    items?: SidebarItemType[];
};

type SidebarItemProps = BaseSidebarItemProps & {
    icon: string;
    activeTab: string;
    onTabChange: (tab: string) => void;
};


export const SectionHeader = ({ title }: BaseSidebarItemProps) => {
    const classes = classNames("font-bold text-gray-700");
    return (
        <>
            <h2 className={classes}>{title.toUpperCase()}</h2>
        </>
    )
}

export const MenuBar = ({ title, icon, items, activeTab, onTabChange }: SidebarItemProps) => {
    // const [isOpen, setIsOpen] = useState(false);

    //TODO: PUSH ISOPEN STATE TO LOCAL STORAGE TO KEEP COLLAPSIBLES OPEN/CLOSED ON REFRESH. ALSO ADD ANIMATION
    //ALSO CHANGE THE ACTIVE TAB'S ICON COLOR.


    return (
        <Collapsible className={"outline-1 rounded-md mt-1 xl:ml-2"}>
            <CollapsibleTrigger className="w-full">
                <div className={"hover:bg-slate-100 cursor-pointer flex items-center justify-between"}>
                    <div className="flex py-3 px-2 items-center gap-1">
                        <img src={icon} alt="icon" />
                        <span>{title}</span>
                    </div>
                    <div>
                        <img src="/assets/icons/sidebar_link-caret.svg" alt="caret icon" className="mr-1.5" />
                    </div>

                </div>

            </CollapsibleTrigger>
            <CollapsibleContent>
                {items &&
                    <ul>
                        {items.map((item: any) => (
                            <LinkItem key={item.id} title={item.title} link={item.link} icon={item.icon}
                                type={item.type} activeTab={activeTab} onTabChange={onTabChange} />
                        ))}
                    </ul>
                }
            </CollapsibleContent>
        </Collapsible>
    )
}

export const LinkItem = ({ title, link, icon, type, activeTab, onTabChange }: SidebarItemProps) => {
    const iconClasses = classNames("w-5,h-5", {
        "w-3 h-3": type === "sub-menu-item",
    });

    const clickableClasses = `cursor-pointer ${activeTab !== title ? "hover:bg-slate-100" : ""}`;

    const handleClick = () => {
        if (title !== activeTab && onTabChange) {
            onTabChange(title);
        }
    };


    const linkComponent = link ? (
        <Link to={link} className={clickableClasses + " flex py-3 px-2 items-center gap-1 "} >
            <img src={icon} alt="icon" className={iconClasses} />
            <span>{title}</span>
        </Link>
    ) : null;

    return <li onClick={handleClick} className={`sidebar-item outline-1 rounded-md ${activeTab === title ? "bg-secondary text-white" : ""}`}>{linkComponent}</li>;
}