import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 33,
    title: "New",
    path: "/new",
    newTab: false,
  },
  {
    id: 4,
    title: "Quick links",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About us",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact us",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
     
    
    ],
  },
];
export default menuData;
