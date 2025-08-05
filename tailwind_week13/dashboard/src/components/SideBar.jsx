import { SideBarHeader } from "./sidebarHeader"
import home from '../assets/home.svg';
import settings from '../assets/settings.svg';
export const SideBar = () => {

    return (
    <>
    <div className="pt-4 px-4 bg-gray-500 h-screen transition-all duration-100 md:w-96 w-0">
        <SideBarHeader />
        <div className="mt-10 ">
            <div className=" flex justify-between py-2 px-2 rounded-xl mb-4 bg-gray-600 text-white">
                <h3 className="font-semibold" >Home</h3>
                <img src={home} alt="home" className='rounded-xl h-6'/>
            </div>
            <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
                <h3 className="font-semibold" >Webinars</h3>
                <img src={home} className='rounded-xl h-6'/>
            </div>
            <div className="flex justify-between py-2 px-2 rounded-xl mb-4">
                <h3 className="font-semibold" >Billings</h3>
                <img src={home} className='rounded-xl h-6'/>
            </div>
            <div className="flex justify-between py-2 px-2  rounded-xl mb-4">
                <h3 className="font-semibold" >User Management</h3>
                <img src={home} className='rounded-xl h-6'/>
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