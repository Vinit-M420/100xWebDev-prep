import { SideBarHeader } from "./sidebarHeader"
import { SideIcon } from "../icons/SideIcon";
import { SideBarTabs } from "./sidebarTabs";
import { useState } from "react";

export const SideBar = () => {
    //const [toggleSideBar , setToggleSideBar] = useState(true);
    // if (toggleSideBar) {
    return  (
    <>
    <div className="pt-4 px-4 bg-white h-screen transition-all duration-100 md:w-96 w-0 
                    border-r border-gray-200 shadow-xl">
         <div className="my-2 ">
            <SideIcon />
            <SideBarHeader />
        </div>
        
        <div className="mt-10 ">
            <SideBarTabs />
        </div>
    </div>
    </>
    )
}