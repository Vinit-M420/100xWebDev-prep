import { PurpleBlob } from "./PurpleBlob"


export const Hero = () => {
    return (
        <div className="flex lg:flex-row p-6 lg:gap-5 max-w-5xl mx-auto overflow-x-hidden
                        flex-col-reverse items-center">
            <div className="flex flex-col space-y-10 lg:mt-10 lg:w-1/2 w-[600px] items-center">
                <h1 className="lg:text-6xllg:pt-10 lg:text-left font-bold tracking-normal text-center text-3xl">
                    A Simple Bookmark Manager
                </h1>
                <p className="lg:text-2xl lg:text-left font-medium text-gray-400 mx-0 w-[400px] text-lg text-center">
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

            <div className="mt-10 lg:w-1/2 mx-0 flex items-center relative">
                <PurpleBlob />
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
                    className="relative z-10 mx-auto ">
                </img>
            </div>
        </div>
    )
}