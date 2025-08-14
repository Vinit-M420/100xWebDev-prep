import { Bookmark } from "../icons/bookmark";

export const Footer = ({ scrollToRef, featuresRef, downloadRef, faqRef }) => {
    return (
        <div className="flex justify-around py-16 items-center bg-slate-800">
                    <div className="flex gap-10 items-center">
                        <div className="flex gap-3">
                            <div className="bg-purple-500 rounded-3xl p-1.5 flex items-center">
                                <Bookmark size={16} />
                            </div>
                            <h1 className="text-xl font-bold tracking-wide text-white">BOOKMARK</h1>
                        </div>
                            <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium"
                                onClick={() => scrollToRef(featuresRef)}>
                            FEATURES</h2>

                            <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium"
                                onClick={() => scrollToRef(downloadRef)}>
                            DOWNLOAD</h2>

                            <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium"
                                onClick={() => scrollToRef(faqRef)}>
                            FAQ</h2>
                    </div>
                    <div className="flex gap-10 items-center">
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
                            src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-twitter.svg">
                            </img>
                        </div>
                    </div>
                </div>
    )
}