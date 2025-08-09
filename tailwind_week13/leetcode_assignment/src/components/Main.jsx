import { useState } from "react"
import { Star } from "../icons/star";
import { Lock } from "../icons/lock";
import { DownArrow } from "../icons/DownArrow";
import { PlayBtn } from "../icons/play";
import { Git } from "../icons/git";

export const Main = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
        <div className="w-full bg-neutral-900 text-white ">
            <div className="grid grid-cols-5 gap-5 m-10">
                
                <div className="col-span-2 bg-neutral-600 p-5 rounded-xl">
                    <div className="flex flex-col gap-4 border-b border-neutral-500">
                    
                        <div className="rounded-lg">
                            <Star width={80} height={80} className= 'fill-yellow-500 bg-star-100 rounded-xl p-3' />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Favorite</h1>
                        </div>
                        <div className="flex gap-2">
                            <h2>Vinit</h2>
                            <div className="-translate-y-1">.</div>
                            <h2>19 questions</h2>
                            <div className="-translate-y-1">.</div>
                            <Lock />
                            <h2>Private</h2>
                            <DownArrow />
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex gap-1 rounded-3xl bg-star-100 text-black px-3 py-2 cursor-pointer
                                            border border-transparent
                                            hover:text-white hover:bg-neutral-900 hover:border-neutral-100">
                                <div className="flex items-center"><PlayBtn /></div>
                                <h2 className="font-semibold text-md">Practice</h2>
                            </div>
                            <div className="flex items-center bg-neutral-700 rounded-3xl p-2 
                                    border border-transparent
                                    hover:text-white hover:bg-neutral-900 hover:border-neutral-100">
                                <Git className="cursor-pointer" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="px-2 mt-4">
                        <div>
                            <h3 className="font-bold">Progress</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-2 my-2">
                           <div class="col-span-2 relative flex items-center justify-center bg-neutral-800 rounded-xl">
                                <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <span class="text-4xl font-bold">19<span class="text-lg">/19</span></span>
                                <span class="mt-1 font-semibold">Solved</span>
                                <span class="mt-2 text-gray-400 text-sm font-semibold">0 Attempting</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="grid grid-rows-3 gap-1">
                                    <div className="row-span-1 bg-neutral-800 rounded-md py-2 px-4 ">
                                        <div className="flex flex-col items-center font-bold text-md">
                                            <h5 className="text-blue-400">Easy</h5>
                                            <h5 className='text-semibold'>11/11</h5>
                                        </div>
                                    </div>
                                    <div className="row-span-1 bg-neutral-800 rounded-md py-2 px-4">
                                        <div className="flex flex-col items-center font-bold">
                                            <h5 className="text-yellow-400">Medium</h5>
                                            <h5 className='text-semibold'>7/7</h5>
                                        </div>
                                    </div>
                                    <div className="row-span-1 bg-neutral-800 rounded-md py-2 px-4">
                                        <div className="flex flex-col items-center font-bold">
                                            <h5 className="text-red-400">Hard</h5>
                                            <h5 className='text-semibold'>1/1</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-span-3 bg-neutral-600 rounded-xl">
                   
                </div>

            </div>
        </div>
    )
}