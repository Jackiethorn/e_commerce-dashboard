type BaseSidebarItem = {
  title: string;
  id: string;
};

type NestedSidebarItem = BaseSidebarItem & {
  items: SidebarItemType[];
};

type SectionHeader = NestedSidebarItem & {
  type: "section-header";
};

type MenuList = BaseSidebarItem & {
  type: "menu-list";
} & Partial<NestedSidebarItem> & {
    icon: string;
  };

type MenuItem = BaseSidebarItem & {
  type: "menu-item";
  link: string;
  icon: string;
} & Partial<NestedSidebarItem>;

export type SidebarItemType = SectionHeader | MenuList | MenuItem;
