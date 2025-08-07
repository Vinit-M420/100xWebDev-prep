import home from '../assets/home.svg';
import settings from '../assets/settings.svg';
import webinar from "../assets/community.svg";
import { Billing } from "../icons/Billing";
import { Community } from "../icons/Community";

export const SideBarTabs = () => {
    return <>
        <div className=" flex justify-between py-2 px-2 rounded-xl mb-4 bg-mblue-100 text-white">
            <h3 className="font-normal text-mblue-900">Home</h3>
            <img src={home} alt="home" className='h-6 '/>
        </div>
        <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
            <h3 className="font-normal text-gray-600" >Webinars</h3>
            <img src={webinar} alt="webinar" className='h-6'/>
        </div>
        <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
            <h3 className="font-normal text-gray-600" >Billings</h3>
            <Billing />
        </div>
        <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
            <h3 className="font-normal text-gray-600" >User Management</h3>
            <Community />
        </div>
        <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
            <h3 className="font-normal text-gray-600" >Settings</h3>
            <img src={settings} alt="settings" className='rounded-xl h-6'/>
        </div>
    </>
}

export const SideBarLogosOnly = () => {
    return <div className='flex flex-col gap-5'>
        <div className="mb-4 bg-mblue-100 rounded-2xl ">
            <img src={home} alt="home" className='h-6 w-6 '/>
        </div>
        <div className="mb-4">
            <img src={webinar} alt="webinar" className='h-6 w-6'/>
        </div>
        <div className="mb-4">
            <Billing />
        </div>
        <div className="mb-4">
            <Community />
        </div>
        <div className="mb-4">
            <img src={settings} alt="settings" className='rounded-xl h-6'/>
        </div>
    </div>
}