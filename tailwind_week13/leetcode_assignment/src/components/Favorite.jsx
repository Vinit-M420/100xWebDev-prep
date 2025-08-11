import { Star } from "../icons/star";
import { Lock } from "../icons/lock";
import { DownArrow } from "../icons/DownArrow";
import { PlayBtn } from "../icons/play";
import { Git } from "../icons/git";

export const Favorite = () => {

    return (
        <div className="flex flex-col gap-4 lg:border-b lg:border-neutral-500 lg:items-start items-center">                    
            <div className="rounded-lg">
                <Star width={80} height={80} className= 'fill-yellow-500 bg-star-100 rounded-xl p-3' />
            </div>
            <div>
                <h1 className="text-3xl font-semibold">Favorite</h1>
            </div>
            <div className="flex gap-2">
                <h2 className="md:text-md text-sm">Vinit</h2>
                <div className="-translate-y-1">.</div>
                <h2 className="md:text-md text-sm" >19 questions</h2>
                <div className="-translate-y-1">.</div>
                <div className="flex items-center"><Lock size="20" /></div>
                <h2 className="md:text-md text-sm">Private</h2>
                <div className="flex items-center"><DownArrow /></div>
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
    ) 
}