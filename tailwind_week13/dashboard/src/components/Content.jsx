import { BtnContent } from './BtnContent';
import { ProfileContent } from './ProfileContent';
import { CalendarHeader } from './CalContent';
import { Meetings } from './MeetsContent';

export const Content = () => {
   return (
    <>
        <div className= "w-full ">
            <div className='h-40 w-full bg-black hidden lg:block'>
            </div>
        
            <div className="grid grid-cols-10 px-8">

            <div className="h-80 rounded-2xl shadow-lg lg:col-span-2 hidden lg:block bg-white -translate-y-10
                            flex-col items-center justify-center text-center py-8 px-4 border border-gray-200">
                    <ProfileContent />          
                </div>
                
                <div className="lg:col-span-5 lg:p-5 p-10 text-black col-span-11 bg-none">
                    
                    <div className='flex flex-col gap-2 mb-4 px-2'>
                        <p className='font-medium text-sm'>Wednesday, 6 October</p>
                        <h1 className='font-bold lg:text-3xl text-xl'>Good Morning, Vinit! 👋</h1>
                    </div>
                    <div className="h-92 rounded-2xl shadow-lg p-5 bg-white border border-gray-200">
                        <CalendarHeader />
                        <Meetings />
                    </div>
                </div>
                
                <div className="h-78 rounded-2xl shadow-lg lg:col-span-3 bg-white-100 translate-y-25 col-span-11 
                                py-10 px-4 lg:mx-1 mx-10 border border-gray-200">
                    <BtnContent />
                </div>
            </div>
        </div>
    </>
    )
}