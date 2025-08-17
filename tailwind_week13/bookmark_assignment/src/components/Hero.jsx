import { PurpleBlob } from "./PurpleBlob"


export const Hero = () => {
    return (
        <div className="flex lg:flex-row lg:gap-5 p-5 max-w-5xl mx-auto overflow-x-hidden flex-col-reverse items-center">
            <div className="flex flex-col space-y-10 lg:mt-10 lg:w-1/2 w-full items-center lg:items-start">
                <div className="w-full max-w-md lg:max-w-none flex flex-col space-y-10">
                <h1 className="lg:text-6xl lg:pt-10 lg:text-left font-bold tracking-normal text-center text-3xl">
                    A Simple Bookmark Manager
                </h1>
                <p className="text-lg text-center lg:text-left text-gray-400 lg:text-2xl lg:mt-0">
                  A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="flex lg:justify-start justify-center gap-2">
                    <div className="bg-purple-500 text-white font-semibold p-3 lg:text-lg text-md 
                                     border-2 border-transparent rounded-lg cursor-pointer
                                   hover:bg-white hover:text-purple-500 hover:border-2 hover:border-purple-500">
                        Get It On Chrome
                    </div>
                    <div className="bg-gray-300 text-black font-semibold p-3 lg:text-lg text-md 
                                    rounded-lg cursor-pointer border-2 border-transparent
                                    hover:bg-white hover:border-2 hover:border-gray-300">
                        Get It On Firefox
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-10 lg:w-1/2 w-md mx-0 flex items-center relative">
                <PurpleBlob />
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
                    className="relative z-10 mx-auto ">
                </img>
            </div>
        </div>
    )
}