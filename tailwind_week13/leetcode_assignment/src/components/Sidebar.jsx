import { useEffect, useState } from "react";
import { SidebarClose } from "../icons/sidebar_close";
import { SidebarExpand } from "../icons/sidebar_expand";
import { Star } from "../icons/star";
import { Lock } from "../icons/lock";

export const Sidebar = ( { toggleSidebar, setToggleSidebar } ) => {
    // const [toggleSidebar, setToggleSidebar] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        if (isDesktop === false) {
            setToggleSidebar(false);
        } else {
            setToggleSidebar(true);
        }
    }, [isDesktop]);

    if (toggleSidebar) {
        return (
            <div className="h-screen w-80 transition-all duration-100 bg-neutral-800
                shadow-2xl fixed left-0 top-0 z-40 md:relative md:z-auto md:shadow-none 
                border-r border-neutral-700  ">
                <div className="flex flex-col mx-5 my-8 gap-2">
                    <div className="flex justify-between p-1">
                        <h2 className="font-bold text-white text-lg">My Lists</h2>
                        <div className="p-1 hover:border hover:border-neutral-500 rounded-sm flex items-center cursor-pointer
                                        border border-transparent"
                            onClick={ () => { 
                                setToggleSidebar(!toggleSidebar);
                                } }>
                            <SidebarClose  />
                        </div>
                    </div>
                    <div className="mb-1 p-1">
                        <h4 className="font-bold text-white text-md">Created by Me</h4>
                    </div>
                    <div className="flex justify-between bg-neutral-700 hover:bg-neutral-600 rounded-lg py-1 px-2">
                        <div className="flex gap-2">
                            <div className="bg-star-100 rounded-lg p-1">
                                <Star className = 'fill-yellow-500' />
                            </div>
                            <h4 className="flex items-center font-bold text-white text-lg">Favorite</h4>
                        </div>
                        <div className="flex items-center">
                            <Lock size="20"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else{
        return (
            <div className="h-screen w-80 transition-all duration-100 bg-neutral-900 md:block hidden">
                <div className="flex flex-col mx-5 my-8 gap-2">
                    <div className="flex justify-between p-1">
                        <h2 className="font-bold text-white text-lg"></h2>
                        <div className="border border-neutral-500 p-1 rounded-sm flex items-center cursor-pointer"
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


const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = (event) => setMatches(event.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
};
