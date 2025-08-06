import { SideBarHeader } from "./sidebarHeader"
import home from '../assets/home.svg';
import settings from '../assets/settings.svg';
import { SideIcon } from "../icons/SideIcon";
import webinar from "../assets/community.svg";
import { Billing } from "../icons/Billing";
import { Community } from "../icons/Community";
export const SideBar = () => {

    return (
    <>
    <div className="pt-4 px-4 bg-gray-500 h-screen transition-all duration-100 md:w-96 w-0">
         <div className="my-2 ">
            <SideIcon/>
            <SideBarHeader />
        </div>
        
        <div className="mt-10 ">
            <div className=" flex justify-between py-2 px-2 rounded-xl mb-4 bg-gray-600 text-white">
                <h3 className="font-semibold">Home</h3>
                <img src={home} alt="home" className='h-6'/>
            </div>
            <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
                <h3 className="font-semibold" >Webinars</h3>
                <img src={webinar} alt="webinar" className='h-6'/>
            </div>
            <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
                <h3 className="font-semibold" >Billings</h3>
                <Billing />
            </div>
            <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
                <h3 className="font-semibold" >User Management</h3>
                <Community />
            </div>
            <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
                <h3 className="font-semibold" >Settings</h3>
                <img src={settings} alt="settings" className='rounded-xl h-6'/>
            </div>
        </div>
    </div>
    </>
    )
}