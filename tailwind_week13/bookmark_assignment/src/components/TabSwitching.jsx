import { useState } from "react"
import { LPurpleBlob } from "./PurpleBlob"


export const TabSwitching = () => {
    const [currentTab , setCurrentTab] = useState('simple')

    return (
        <div>
            <div className="flex justify-center gap-20 max-w-xl mb-6 mx-auto mt-16 border-b border-gray-500">
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
            <div> <LPurpleBlob />
            <div className="z-10 relative">
                <div className={`${currentTab === "simple" ? "block" : "hidden"}`}>
                    <div className="flex flex-row p-6 gap-5 max-w-5xl mx-auto">
                        <div className="w-1/2 flex justify-center items-center">
                            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"
                                className="w-[100%] h-auto object-contain" />
                        </div>
                        <div className="w-1/2 flex flex-col space-y-10">
                            <h1 className="text-3xl font-bold text-left">
                                Bookmark in one click
                            </h1>
                            <p className="text-lg text-gray-400 text-left tracking-tight">
                                Organize your bookmarks however you like. Our simple drag-and-drop interface 
                                gives you complete control over how you manage your favourite sites.
                            </p>
                            <div className="inline-flex">
                                <div className="bg-purple-500 font-semibold text-lg text-white p-3 rounded-lg cursor-pointer
                                                border-2 border-transparent hover:bg-white hover:text-purple-500 hover:border-purple-500">
                                    More Info
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${currentTab === "speedy" ? "block" : "hidden"}`}>
                    <div className="flex flex-row p-6 gap-5 max-w-5xl mx-auto">
                        <div className="w-1/2 flex justify-center items-center">
                            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"
                                className="w-[100%] h-auto object-contain" />
                        </div>
                        <div className="w-1/2 flex flex-col space-y-10">
                            <h1 className="text-3xl font-bold text-left">
                                Intelligent search
                            </h1>
                            <p className="text-lg text-gray-400 text-left tracking-tight">
                                Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                            </p>
                            <div className="inline-flex">
                                <div className="bg-purple-500 font-semibold text-lg text-white p-3 rounded-lg cursor-pointer
                                                border-2 border-transparent hover:bg-white hover:text-purple-500 hover:border-purple-500">
                                    More Info
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${currentTab === "easy" ? "block" : "hidden"}`}>
                    <div className="flex flex-row p-6 gap-5 max-w-5xl mx-auto">
                        <div className="w-1/2 flex justify-center items-center">
                            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg"
                                className="w-[100%] h-auto object-contain" />
                        </div>
                        <div className="w-1/2 flex flex-col space-y-10">
                            <h1 className="text-3xl font-bold text-left">
                                Share your bookmarks
                            </h1>
                            <p className="text-lg text-gray-400 text-left tracking-tight">
                                Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.
                            </p>
                            <div className="inline-flex">
                                <div className="bg-purple-500 font-semibold text-lg text-white p-3 rounded-lg cursor-pointer
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