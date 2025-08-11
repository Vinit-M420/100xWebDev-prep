import { useState } from "react"
import { Filter } from "../icons/filter";
import { FilterToggle } from "./FilterToggle";
import { Favorite } from "./Favorite";
import { Progress } from "./Progress";
import { SidebarExpand } from "../icons/sidebar_expand";
// import { SidebarOverlay } from "./SidebarOverlay";
import { EasyLeets } from "./EasyLeets";
import { Cross } from "../icons/cross";

export const Main = ( { toggleSidebar, setToggleSidebar } ) => {
    const [toggleFilter, setToggleFilter] = useState(false);

    return (
        <div className="w-full bg-neutral-900 text-white ">
            <div className="grid grid-cols-5 gap-5 m-10">
                <div className="lg:col-span-2 col-span-5 bg-neutral-800 p-5 rounded-xl">
                    <div className="md:hidden block hover:border hover:border-neutral-500 border border-transparent
                                    p-1 rounded-sm cursor-pointer absolute"
                        onClick={() => { 
                                        if(toggleFilter === true && toggleSidebar === true){
                                            // setToggleFilter(!toggleFilter); 
                                            console.log("closing filter");
                                        };
                                        setToggleSidebar(!toggleSidebar); 
                                        }} >
                        <SidebarExpand />
                     </div>
                    <Favorite />
                    <Progress />
                </div>
                
                <div className="lg:col-span-3 col-span-5 rounded-xl">
                    <div>
                        <div className="flex gap-3">
                            <div className="inline-flex items-center gap-1 rounded-3xl px-2 mb-3
                                            bg-star-100 text-black p-1 cursor-pointer border border-transparent
                                            hover:text-white hover:bg-neutral-900 hover:border-neutral-100"
                                    onClick={ () =>{
                                        setToggleFilter(!toggleFilter); 
                                        console.log("toggled filter"); }}>

                                            <div className="flex items-center"><Filter /></div>
                                            <h2 className="font-semibold text-md m-0 p-0">Filter</h2>
                            </div>
                            <div className="inline-flex gap-1 items-center rounded-3xl border border-neutral-500 px-2 mb-3">
                                <h4 className="font-semibold text-sm m-0 p-0">Easy</h4>
                                <div className="cursor-pointer">
                                <Cross /></div> 
                            </div>
                        </div>
                        <div>
                            <FilterToggle>{toggleFilter}</FilterToggle>
                        </div>
                    </div> 
                    <EasyLeets />
                </div>
            </div>
        </div>
    )
}