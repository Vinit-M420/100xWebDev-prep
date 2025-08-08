import { useState } from "react"
import { SidebarClose } from "../icons/sidebar_close";
import { SidebarExpand } from "../icons/sidebar_expand";
import { Star } from "../icons/star";
import { Lock } from "../icons/lock";

export const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    if (toggleSidebar) {
        return (
            <div className="h-screen w-80 transition-all duration-100 bg-neutral-800">
                <div className="flex flex-col mx-5 my-8 gap-2">
                    <div className="flex justify-between p-1">
                        <h2 className="font-bold text-white text-lg">My Lists</h2>
                        <div className="p-1 hover:border hover:border-neutral-500 rounded-sm flex items-center"
                            onClick={ () => { 
                                setToggleSidebar(!toggleSidebar);
                                //console.log("SideBar toggled"); 
                                } }>
                            <SidebarClose  />
                        </div>
                    </div>
                    <div className="mb-1 p-1">
                        <h4 className="font-bold text-white text-md">Created by Me</h4>
                    </div>
                    <div className="flex justify-between bg-neutral-700 rounded-lg py-1 px-2">
                        <div className="flex gap-2">
                            <div className="bg-star-100 rounded-lg p-1">
                                <Star className = 'fill-yellow-500' />
                            </div>
                            <h4 className="flex items-center font-bold text-white text-lg">Favorite</h4>
                        </div>
                        <div className="flex items-center">
                            <Lock />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else{
        return (
            <div className="h-screen w-80 transition-all duration-100 bg-neutral-900">
                <div className="flex flex-col mx-5 my-8 gap-2">
                    <div className="flex justify-between p-1">
                        <h2 className="font-bold text-white text-lg"></h2>
                        <div className="border border-neutral-500 p-1 rounded-sm flex items-center"
                            onClick={ () => { 
                                setToggleSidebar(!toggleSidebar);
                            }} >
                            <SidebarExpand />
                        </div>
                    </div>
                
                </div>
        </div>
        )
    }
}