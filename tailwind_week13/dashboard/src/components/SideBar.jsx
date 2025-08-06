import { SideBarHeader } from "./sidebarHeader"
import home from '../assets/home.svg';
import settings from '../assets/settings.svg';
import { SideIcon } from "../icons/SideIcon";
import webinar from "../assets/community.svg";
import { Billing } from "../icons/Billing";
import { Community } from "../icons/Community";
import { useState } from "react";

export const SideBar = () => {
    //const [toggleSideBar , setToggleSideBar] = useState(true);
    // if (toggleSideBar) {
    return  (
    <>
    <div className="pt-4 px-4 bg-gray-100 h-screen transition-all duration-100 md:w-96 w-0 outline-white-6">
         <div className="my-2 ">
            <SideIcon />
            <SideBarHeader />
        </div>
        
        <div className="mt-10 ">
            <div className=" flex justify-between py-2 px-2 rounded-xl mb-4 bg-gray-500 text-white">
                <h3 className="font-normal">Home</h3>
                <img src={home} alt="home" className='h-6 '/>
            </div>
            <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
                <h3 className="font-normal" >Webinars</h3>
                <img src={webinar} alt="webinar" className='h-6'/>
            </div>
            <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
                <h3 className="font-normal" >Billings</h3>
                <Billing />
            </div>
            <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
                <h3 className="font-normal" >User Management</h3>
                <Community />
            </div>
            <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
                <h3 className="font-normal" >Settings</h3>
                <img src={settings} alt="settings" className='rounded-xl h-6'/>
            </div>
        </div>
    </div>
    </>
    )
}