"use client";

import { MdDashboard,MdManageAccounts } from "react-icons/md";
import  { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine} from "react-icons/ri";
import { title } from "process";



const menus = [
  {
    title:"Dashboard",
    icon:<MdDashboard/>,
    href:"/admin/dashboard",
  },
  {
    title:"Products",
    icon:<RiShoppingCartLine/>,
    href:"/admin/products",
  },
  {
    title:"Accounts",
    icon:<MdManageAccounts/>,
    href:"#",
  },
  {
    title:"Transactions",
    icon:<GrTransaction/>,
    href:"#",
  },
  {
    title:"Analytics",
    icon:<IoAnalytics/>,
    href:"#",
  },
  {
    title:"Setting",
    icon:<IoSettings/>,
    href:"#",
  },
];

const SideBar = () => {
  return 
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <img className="size-12 rounded-lg" src="/public/horseLogo.jpg" alt="logo" />

        <ul className="space-y-4 mt-6">
          {menus.map(menu => <link key={menu.title} href={menu.href} className=""></link>)}
        </ul>

      </div>
      </div>;

  };
  export default SideBar
