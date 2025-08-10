import { useState } from "react"
import { Filter } from "../icons/filter";
import { FilterToggle } from "./FilterToggle";
import { Favorite } from "./Favorite";
import { Progress } from "./Progress";
import { Leet } from "./Leets";

export const Main = () => {
    // const [toggleSidebar, setToggleSidebar] = useState(true);
    const [toggleFilter, setToggleFilter] = useState(false);
    return (
        <div className="w-full bg-neutral-900 text-white ">
            <div className="grid grid-cols-5 gap-5 m-10">
                <div className="col-span-2 bg-neutral-600 p-5 rounded-xl">
                    <Favorite />
                    <Progress />
                </div>
                
                <div className="col-span-3 rounded-xl">

                   <div className="inline-flex items-center gap-1 rounded-3xl px-2
                                bg-star-100 text-black p-1 cursor-pointer border border-transparent
                                hover:text-white hover:bg-neutral-900 hover:border-neutral-100 mb-3"
                        onClick={ () =>{
                            setToggleFilter(!toggleFilter); 
                            console.log("toggled filter"); }}>

                                <div className="flex items-center"><Filter /></div>
                                <h2 className="font-semibold text-md m-0 p-0">Filter</h2>
                    </div>
                    <div>
                        <FilterToggle>{toggleFilter}</FilterToggle>
                    </div> 
                
                    <div className="bg-neutral-600 rounded-lg">
                        <Leet>14. Longest Common Prefix</Leet>
                    </div>
                    <div className=''>
                        <Leet>217. Contains Duplicate</Leet>
                    </div>
                    <div className="bg-neutral-600 rounded-lg">
                        <Leet>125. Valid Palindrome</Leet>
                    </div>
                    <div className=''>
                        <Leet>26. Remove Duplicates from Sorted Array</Leet>
                    </div>
                    <div className="bg-neutral-600 rounded-lg">
                        <Leet>66. Plus One</Leet>
                    </div>
                    <div className=''>
                        <Leet>136. Single Number</Leet>
                    </div>
                    <div className="bg-neutral-600 rounded-lg">
                        <Leet>121. Best Time to Buy and Sell Stocks</Leet>
                    </div>
                    <div className=''>
                        <Leet>88. Merged Sorted Array</Leet>
                    </div>
                    <div className="bg-neutral-600 rounded-lg">
                        <Leet>69. Sqrt(x) </Leet>
                    </div>
                </div>
            </div>
        </div>
    )
}