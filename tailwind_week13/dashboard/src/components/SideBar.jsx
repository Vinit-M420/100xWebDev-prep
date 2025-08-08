import { SideBarHeader } from "./sidebarHeader"
import { SideIcon } from "../icons/SideIcon";
import { SideBarTabs, SideBarLogosOnly } from "./sidebarTabs";
import { useEffect, useState } from "react";

export const SideBar = () => {
    const [toggleSideBar, setToggleSideBar] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        if (isDesktop === false) {
            setToggleSideBar(false);
        } else {
            setToggleSideBar(true);
        }
    }, [isDesktop]);

    if (toggleSideBar) {
        return (
            // px-4 bg-white h-screen transition-all duration-100 md:w-80 w-15 
            // border-r border-gray-200 shadow-xl fixed left-0 top-0 z-40

            <div className="px-4 bg-white h-screen transition-all duration-100 md:w-80 w-60 border-r border-gray-200 
                            shadow-xl fixed left-0 top-0 z-40 md:relative md:z-auto md:shadow-none">

                <div className="mt-4 inline-block cursor-pointer hover:bg-slate-300 rounded-md"
                    onClick={() => { setToggleSideBar(!toggleSideBar); console.log("sidebar btn clicked"); }}>
                    <SideIcon />
                </div>
                <div className="my-2">
                    <SideBarHeader />
                </div>
                <div className="mt-10">
                    <SideBarTabs />
                </div>
            </div>
        )
    } else {
        return (
            <div className="px-4 bg-white h-screen transition-all duration-100 md:w-15 w-15 border-r border-gray-200 
                            shadow-xl fixed left-0 top-0 z-40 md:relative md:z-auto md:shadow-none">

                <div className="my-4 inline-block cursor-pointer hover:bg-slate-300 rounded-md"
                    onClick={() => { setToggleSideBar(!toggleSideBar); }}>
                    <SideIcon />
                </div>
                <div className="mt-20">
                    <SideBarLogosOnly />
                </div>
            </div>
        )
    }
}

// UseMediaQuery remains unchanged
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
