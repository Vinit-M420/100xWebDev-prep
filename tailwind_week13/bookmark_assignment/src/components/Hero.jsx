import { PurpleBlob } from "./PurpleBlob"


export const Hero = () => {
    return (
        <div className="flex flex-row p-6 gap-5 max-w-5xl mx-auto">
            <div className="flex flex-col space-y-10 mt-10 w-1/2">
                <h1 className="text-6xl font-bold text-left tracking-normal pt-10">
                    A Simple Bookmark Manager
                </h1>
                <p className="text-2xl font-medium text-gray-400 text-left mx-0">
                  A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="flex gap-2">
                    <div className="bg-purple-500 font-semibold text-lg text-white p-3 rounded-lg cursor-pointer
                                    border-2 border-transparent hover:bg-white hover:text-purple-500 hover:border-2 hover:border-purple-500">
                        Get It On Chrome
                    </div>
                    <div className="bg-gray-300 font-semibold text-lg text-black p-3 rounded-lg cursor-pointer
                                    border-2 border-transparent hover:bg-white hover:border-2 hover:border-gray-300">
                        Get It On Firefox
                    </div>
                </div>
            </div>
            <div className="mt-10 w-1/2 mx-0 flex items-center">
                <PurpleBlob />
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
                    className="relative z-10 mx-auto">
                </img>
            </div>

        </div>
    )
}