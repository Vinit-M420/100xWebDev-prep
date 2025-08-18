import { useState } from "react";
import { Bars } from "../icons/bars";
import { Bookmark } from "../icons/bookmark";
import { Cross } from "../icons/cross";

export const Header = ({ scrollToRef, featuresRef, downloadRef, faqRef }) => {
    const [toggleHeader, setToggleHeader] = useState(false);

    if (toggleHeader) {
        return (
            <div className="fixed inset-0 bg-[#3a4058]/95 z-50 mx-auto">
                <div className="flex justify-around py-10">
                    <div className="flex gap-3">
                        <div className="bg-purple-500 rounded-3xl p-1.5 flex items-center">
                            <Bookmark size={16} />
                        </div>
                        <h1 className="text-xl font-bold tracking-wide text-white">BOOKMARK</h1>
                    </div>
                    <div onClick={() => setToggleHeader(false) }>
                        <Cross />
                    </div>
                </div>

                <div className="flex flex-col gap-10 items-center justify-center px-4 w-full max-w-sm mx-auto">
                        <h2 className="tracking-widest hover:text-orange-500 text-white font-medium 
                                      border-b border-gray-400 pb-2 w-full text-center"
                            onClick={() => scrollToRef(featuresRef)}>
                        FEATURES</h2>

                    <h2 className="tracking-widest hover:text-orange-500 text-white font-medium 
                                    border-b border-gray-400 pb-2 w-full text-center"
                        onClick={() => scrollToRef(downloadRef)}>
                    DOWNLOAD</h2>

                    <h2 className="tracking-widest hover:text-orange-500 text-white font-medium
                                    border-b border-gray-400 pb-2 w-full text-center"
                        onClick={() => scrollToRef(faqRef)}>
                    FAQ</h2>

                    <div className="tracking-widest hover:text-orange-500 text-white font-medium w-full text-center">
                        <h3>LOGIN</h3>
                    </div>
                </div>
            </div>
        )
    }
    else {
    return (
        <div>
            <div className="md:flex md:justify-around py-10 items-center hidden">
                <div className="flex gap-3">
                    <div className="bg-purple-500 rounded-3xl p-1.5 flex items-center">
                        <Bookmark size={16} />
                    </div>
                    <h1 className="text-xl font-bold tracking-wide text-black">BOOKMARK</h1>
                </div>

                <div className="flex gap-10 items-center">
                    <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium"
                        onClick={() => scrollToRef(featuresRef)}>
                    FEATURES</h2>

                    <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium"
                        onClick={() => scrollToRef(downloadRef)}>
                    DOWNLOAD</h2>

                    <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium"
                        onClick={() => scrollToRef(faqRef)}>
                    FAQ</h2>

                    <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 rounded-lg py-2 px-8
                                    border-2 border-transparent hover:border-2 hover:border-orange-500">
                        <h3>LOGIN</h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-around py-10 items-center md:hidden">
                <div className="flex gap-3">
                    <div className="bg-purple-500 rounded-3xl p-1.5 flex items-center">
                        <Bookmark size={16} />
                    </div>
                    <h1 className="text-xl font-bold tracking-wide text-black">BOOKMARK</h1>
                </div>
                <div onClick={() => setToggleHeader(true) } >
                    <Bars currentColor = 'black' />
                </div>
            </div>

        </div>
    )
}
}