import { Calendar } from '../icons/Calendar';
import { Plus } from '../icons/Plus';
import { Recording } from '../icons/recording';

export const BtnContent = () => {

    return <>
        <div className="grid grid-cols-2 gap-2 mb-10">
                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="bg-mblue-300 rounded-md p-3 mb-2 flex items-center justify-center">
                            <Calendar width={28} height={28} className="text-cyan-800" />
                        </div>
                        <span className="text-sm text-gray-700 font-bold text-center">Schedule a Webinar</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                    <div className="bg-mblue-300 rounded-md p-3 mb-2 flex items-center justify-center">
                        <Plus width={28} height={28} className="text-cyan-800" />
                    </div>
                    <span className="text-sm text-gray-700 font-bold text-center">Join a Webinar</span>
                    </div>
                
                </div>
                <div className="grid grid-cols-2 gap-2 cursor-pointer ">
                    <div className="flex flex-col items-center">
                        <div className="bg-mblue-300 rounded-md p-3 mb-2 flex items-center justify-center ">
                            <Recording width={28} height={28} fill={'black'} />
                        </div>
                        <span className="text-sm text-gray-700 font-bold text-center">Open Recordings</span>
                    </div> 
                </div>   
    </>
}