type BaseSidebarItem = {
  title: string;
  id: string;
};

type NestedSidebarItem = BaseSidebarItem & {
  items: SidebarItemType[];
};

type SubHeaderItem = NestedSidebarItem & {
  type: "sub-header";
};

type LinkItem = BaseSidebarItem & {
  type: "link-item";
  link: string;
  icon: string;
} & Partial<NestedSidebarItem>;

export type SidebarItemType = SubHeaderItem | LinkItem;
