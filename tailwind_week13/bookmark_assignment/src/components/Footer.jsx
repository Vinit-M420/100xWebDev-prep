import { Bookmark } from "../icons/bookmark";

export const Footer = ({ scrollToRef, featuresRef, downloadRef, faqRef }) => {
    return (
        <div className="md:flex md:flex-row md:justify-around py-16 items-center mx-auto md:space-y-0 space-y-16 bg-slate-800 flex flex-col">
            <div className="md:flex md:flex-row md:gap-10 md:space-y-0 space-y-10 flex flex-col items-center">
                <div className="flex gap-3">
                    <div className="bg-purple-500 rounded-3xl p-1.5 flex items-center">
                        <Bookmark size={16} />
                    </div>
                    <h1 className="text-xl font-bold tracking-wide text-white">BOOKMARK</h1>
                </div>
                
                <h2 className="tracking-widest hover:text-orange-500 text-gray-400 font-medium cursor-pointer"
                    onClick={() => scrollToRef(featuresRef)}>
                FEATURES</h2>

                <h2 className="tracking-widest hover:text-orange-500 text-gray-400 font-medium cursor-pointer"
                    onClick={() => scrollToRef(downloadRef)}>
                DOWNLOAD</h2>

                <h2 className="tracking-widest hover:text-orange-500 text-gray-400 font-medium cursor-pointer"
                    onClick={() => scrollToRef(faqRef)}>
                FAQ</h2>
            </div>
            <div className="flex gap-10 items-center justify-center">
                <div className="">
                    <img href="#" 
                    className="transition duration-200 group-hover:filter-orange"
                    alt="Facebook"
                    src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-facebook.svg">
                    </img>
                </div>
                <div >
                    <img href="#" 
                    className=""
                    alt="Twitter"
                    src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-twitter.svg">
                    </img>
                </div>
            </div>
        </div>
    )
}