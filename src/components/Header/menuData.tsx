'use client'
import { useContext } from "react";
import { Menu } from "@/types/menu";
import { HomeIcon, LogInIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { GeneralContext } from "@/contextproviders/generalcontext";



interface SubMenuProps {
  id: number,
  title: string,
  path?: string,
  newTab: boolean,
}

interface MenuProps {

    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    target: string;
    icon: React.ReactNode,
    iconColor: string,
    submenu?: SubMenuProps[];

}



const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    iconColor: 'blue',
    icon: <HomeIcon />,
    target: '',
    
  },

  {
    id: 2,
    target: '',
    title: "Admin",
    iconColor: 'green',
    icon: <SettingsIcon />,
    path: "http://localhost:3000/dashboard/dashboardpage",
    newTab: false,
  },
 

  
];
export default menuData;
