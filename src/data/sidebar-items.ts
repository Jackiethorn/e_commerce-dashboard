import { SidebarItemType } from "../types/sidebar-items.types";

export const sidebarItems: SidebarItemType[] = [
  {
    title: "Apps and Pages",
    type: "section-header",
    id: "e954dd24-0a9f-4441-8ba7-f5f9fb3e2dac",
    items: [
      {
        title: "Dashboard",
        link: "/",
        icon: "public/assets/icons/sidebar_link-home.svg",
        type: "menu-item",
        id: "bbf2b276-5199-4e9e-88f3-59f9f503c214",
      },
      {
        title: "Products",
        icon: "public/assets/icons/sidebar_link-products.svg",
        type: "menu-list",
        id: "37ff5c42-43b2-44db-999a-d84ac5311e4a",
        items: [
          {
            title: "Product List",
            link: "/products",
            icon: "public/assets/icons/sidebar_link-dot.svg",
            type: "menu-item",
            id: "f3e3e3e3-3e3e-3e3e-3e3e-3e3e3e3e3e3e",
          },
          {
            title: "Add Product",
            link: "/products/new",
            icon: "public/assets/icons/sidebar_link-dot.svg",
            type: "menu-item",
            id: "68002c38-6a97-4f64-b5d4-1f84e8ffabc0",
          },
        ],
      },
      {
        title: "Customers",
        icon: "public/assets/icons/sidebar_link-customers.svg",
        type: "menu-list",
        id: "17fc6cdb-8219-4ffa-804e-29a618f515cf",
        items: [
          {
            title: "Customer List",
            link: "/customers",
            icon: "public/assets/icons/sidebar_link-dot.svg",
            type: "menu-item",
            id: "3676d055-2283-48e3-bf4a-4511f00f25dd",
          },
        ],
      },
      {
        title: "Orders",
        icon: "",
        type: "menu-list",
        id: "837c3223-cb1a-4bac-b6dc-32342c66530d",
        items: [
          {
            title: "Order List",
            link: "/orders",
            icon: "public/assets/icons/sidebar_link-dot.svg",
            type: "menu-item",
            id: "371dd719-ec91-44f6-9fdb-5b90f1781da4",
          },
        ],
      },
      {
        title: "Team",
        link: "/team",
        icon: "public/assets/icons/sidebar_link-team.svg",
        type: "menu-item",
        id: "3d84430a-d7ea-42d9-8a4a-ed98a91d7595",
      },
    ],
  },
  {
    title: "Profile",
    type: "section-header",
    id: "323cec3c-7bee-4ec4-a500-e1a4b8e3b5c2",
    items: [
      {
        title: "Settings",
        link: "/settings",
        icon: "public/assets/icons/sidebar_link-settings.svg",
        type: "menu-item",
        id: "18b632f4-669b-4be5-bf77-05089c1f8d50",
      },
      {
        title: "Profile",
        link: "/profile",
        icon: "public/assets/icons/sidebar_link-profile.svg",
        type: "menu-item",
        id: "5832b0c4-0f8c-477e-bf5b-c2693eb7ecfe",
      },
    ],
  },
];
