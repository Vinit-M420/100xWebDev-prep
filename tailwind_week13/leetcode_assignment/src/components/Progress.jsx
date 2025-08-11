import { Refresh } from "../icons/refresh";
import { Check } from "../icons/check";
import { Right } from "../icons/right";

export const Progress = () => {
    
    return ( <div>
        <div className="px-2 mt-4 lg:block hidden">
           <div className="flex justify-between py-2">
                <h3 className="font-bold">Progress</h3>
                <div className="flex items-center cursor-pointer border border-transparent rounded-3xl
                                hover:border hover:border-neutral-100 hover:bg-neutral-900 p-2">
                    <Refresh size='16' />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
                <div class="col-span-2 relative flex items-center justify-center bg-neutral-700 rounded-xl">
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span class="text-4xl font-bold">19<span class="text-lg">/19</span></span>
                    <div className="flex gap-2">
                        <div className="flex items-center"><Check size='20' /></div>
                        <span class="mt-1 font-semibold text-lg">Solved</span>
                    </div>
                    
                    <span class="mt-2 text-gray-400 text-sm font-semibold">0 Attempting</span>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-rows-3 gap-2">
                        <div className="row-span-1 bg-neutral-700 rounded-md py-2 px-4 ">
                            <div className="flex flex-col items-center font-bold text-md">
                                <h5 className="text-blue-400">Easy</h5>
                                <h5 className='text-semibold'>11/11</h5>
                            </div>
                        </div>
                        <div className="row-span-1 bg-neutral-700 rounded-md py-2 px-4">
                            <div className="flex flex-col items-center font-bold">
                                <h5 className="text-yellow-400">Medium</h5>
                                <h5 className='text-semibold'>7/7</h5>
                            </div>
                        </div>
                        <div className="row-span-1 bg-neutral-700 rounded-md py-2 px-4">
                            <div className="flex flex-col items-center font-bold">
                                <h5 className="text-red-400">Hard</h5>
                                <h5 className='text-semibold'>1/1</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            <div className="lg:hidden bg-neutral-700 inline-flex items-center gap-2 px-4 py-1 rounded-lg font-medium">
                <h2>Progress: <span className="text-lg font-semibold">19</span> Solved</h2>
                <Right />
            </div>
        </div>    
    )
}