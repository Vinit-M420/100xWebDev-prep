import { useState } from "react"
import { Star } from "../icons/star";
import { Lock } from "../icons/lock";
import { DownArrow } from "../icons/DownArrow";
import { PlayBtn } from "../icons/play";

export const Main = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
        <div className="w-full bg-neutral-900 text-white ">
            <div className="grid grid-cols-5 gap-5 m-10">
                
                <div className="col-span-2 bg-neutral-600 p-5 rounded-xl">
                    <div className="flex flex-col gap-3 border-b border-neutral-500">
                    
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
                        <div className="flex gap-3">
                            <div className="flex gap-1 rounded-3xl bg-star-100 text-black px-3 py-2 cursor-pointer">
                                <div className="flex items-center"><PlayBtn /></div>
                                
                                <h2 className="font-semibold text-md">Practice</h2>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="">
                        <h3>Progress</h3>
                        <div className="grid grid-cols-3 gap-2 p-2">
                            <div className="col-span-2 p-2 bg-gray-100">

                            </div>
                            <div className="col-span-1 p-2 bg-gray-500">

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-span-3 bg-neutral-500">
                    <h1>HELLO</h1>
                </div>

            </div>
        </div>
    )
}