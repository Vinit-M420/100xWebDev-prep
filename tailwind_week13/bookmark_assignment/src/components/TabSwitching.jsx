import { useState } from "react"
import { LPurpleBlob } from "./PurpleBlob"


export const TabSwitching = () => {
    const [currentTab , setCurrentTab] = useState('simple')

    return (
        <div>
            <div className="flex md:flex-row justify-center md:gap-20 md:max-w-xl mb-6 mx-auto mt-16 border-b border-gray-200
                            flex-col items-center max-w-sm">
                <div className={`py-5 hover:text-orange-500 cursor-pointer text-gray-600 
                ${currentTab === "simple" ? "border-orange-500 border-b-4" : ""}`}
                    onClick={() => { setCurrentTab("simple") }}>
                    <h3>Simple Bookmarking</h3>
                </div>
                <div className={`py-5 hover:text-orange-500 cursor-pointer text-gray-600
                    ${currentTab ==='speedy' ? 'border-orange-500 border-b-4' : ''}`}
                    onClick={() => { setCurrentTab("speedy") }}>
                    <h3>Speedy Searching</h3>
                </div>
                <div className={`py-5 hover:text-orange-500 cursor-pointer text-gray-600
                    ${currentTab === "easy" ? "border-orange-500 border-b-4" : "" }`}
                    onClick={() => setCurrentTab("easy") }>
                    <h3>Easy Searching</h3>
                </div>
            </div>

            <div> 
                <div className="xl:block hidden">
                    <LPurpleBlob />
                </div>

                <div className="z-10 relative">
                    <div className={`${currentTab === "simple" ? "block" : "hidden"}`}>
                        <div className="md:flex md:flex-row p-6 gap-7 max-w-5xl mx-auto flex-col">
                            <div className="md:w-1/2 mx-auto">
                                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"
                                    className="w-[100%] h-auto object-contain" />
                            </div>
                            <div className="md:w-1/2 md:mt-0 mt-20 flex flex-col md:items-start gap-10 mx-auto">
                                <h1 className="text-3xl font-bold md:text-left text-center">
                                    Bookmark in one click
                                </h1>
                                <p className="text-gray-400 tracking-tight text-md md:text-left text-center max-w-md">
                                    Organize your bookmarks however you like. Our simple drag-and-drop interface 
                                    gives you complete control over how you manage your favourite sites.
                                </p>
                                <div className="inline-flex md:justify-start justify-center">
                                    <div className="bg-purple-500 font-bold text-md text-white py-2 px-5 rounded-lg cursor-pointer
                                                    border-2 border-transparent hover:bg-white hover:text-purple-500 hover:border-purple-500">
                                        More Info
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${currentTab === "speedy" ? "block" : "hidden"}`}>
                        <div className="md:flex md:flex-row p-6 gap-7 max-w-5xl mx-auto flex-col">
                            <div className="md:w-1/2 mx-auto">
                                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"
                                    className="w-[100%] h-auto object-contain" />
                            </div>
                            
                           <div className="md:w-1/2 md:mt-0 mt-20 flex flex-col md:items-start gap-10 mx-auto">
                                <h1 className="text-3xl font-bold md:text-left text-center">
                                    Intelligent search
                                </h1>
                                <p className="text-gray-400 tracking-tight text-md md:text-left text-center max-w-md">
                                    Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                                </p>
                                <div className="inline-flex md:justify-start justify-center">
                                    <div className="bg-purple-500 font-bold text-md text-white py-2 px-5 rounded-lg cursor-pointer
                                                    border-2 border-transparent hover:bg-white hover:text-purple-500 hover:border-purple-500">
                                        More Info
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${currentTab === "easy" ? "block" : "hidden"}`}>
                        <div className="md:flex md:flex-row p-6 gap-7 max-w-5xl mx-auto flex-col">
                            <div className="md:w-1/2 mx-auto">
                                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg"
                                    className="w-[100%] h-auto object-contain" />
                            </div>
                            <div className="md:w-1/2 md:mt-0 mt-20 flex flex-col md:items-start gap-10 mx-auto">
                                <h1 className="text-3xl font-bold md:text-left text-center">
                                    Share your bookmarks
                                </h1>
                                <p className="text-gray-400 tracking-tight text-md md:text-left text-center max-w-md">
                                    Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.
                                </p>
                                <div className="inline-flex md:justify-start justify-center">
                                    <div className="bg-purple-500 font-bold text-md text-white py-2 px-5 rounded-lg cursor-pointer
                                                    border-2 border-transparent hover:bg-white hover:text-purple-500 hover:border-purple-500">
                                        More Info
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}