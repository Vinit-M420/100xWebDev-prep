import bokuto from '../assets/bokuto.jpg';
import { Calendar } from '../icons/Calendar';
import { DownArrow } from '../icons/DownArrow';
import { Plus } from '../icons/Plus';
import { Recording } from '../icons/recording';

export const Content = () => {

    return (
    <>
        <div className= "w-full bg-gray-600">
            <div className='h-40 w-full bg-black hidden md:block'>
            </div>
        
        <div className="grid grid-cols-11 px-10 ">
           <div className="h-80 rounded-2xl shadow-sm md:col-span-3 hidden md:block bg-white -translate-y-10
                           flex-col items-center justify-center text-center py-8 px-4 ">

                    <img src={bokuto} alt="bokuto" className="mx-auto rounded-xl w-30 h-30 shadow-md "/>
                    <h2 className="font-bold text-xl my-3">Vinit M</h2>
                    <p className="text-gray-500">vinit@gmail.com</p>
                    <p className="text-gray-500">9233129345</p>
                    <p className="text-gray-500 mt-3">Mumbai, India</p>
            </div>
            
            <div className="md:col-span-5 p-5 text-black col-span-11 bg-none">
                <p className='font-medium text-md '>Wednesday, 6 October</p>
                <h1 className='font-bold text-3xl my-5'>Good Morning, Vinit! 👋</h1>
            
                <div className="h-80 rounded-2xl shadow p-5 bg-gray-200">
                    <div className='flex justify-between bg-gray-400 rounded-xs p-1'>
                        <div className='flex gap-2'>
                            <Calendar width={24} height={24} />
                            <h2>Wednesday, 06 August 2025</h2>
                            <DownArrow />
                        </div>
                        <div className='flex gap-2'>
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                                </svg>
                            </>
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </>

                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="h-80 rounded-2xl shadow md:col-span-3 bg-gray-200 translate-y-30 col-span-11 
                            py-10 px-4">
                <div className="grid grid-cols-2 gap-2 mb-10">
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-400 rounded-md p-2 mb-2 flex items-center justify-center">
                            <Calendar width={32} height={32} className="text-cyan-800" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium text-center">Schedule a Webinar</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="bg-gray-400 rounded-md p-2 mb-2 flex items-center justify-center">
                        <Plus width={32} height={32} className="text-cyan-800" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium text-center">Join a Webinar</span>
                    </div>
                
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-400 rounded-md p-2 mb-2 flex items-center justify-center">
                            <Recording width={32} height={32} className="text-cyan-800" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium text-center">Open Recordings</span>
                    </div>

                    
                </div>   

            </div>

        </div>
        </div>
    </>
    )
}