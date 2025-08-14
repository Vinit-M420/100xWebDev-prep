

export const Download = () => {

    return (
        <div className="flex flex-col justify-center items-center mx-auto mt-40 px-6 max-w-5xl">
            <h2 className="text-4xl text-black font-bold mb-6 text-center ">
                Download the extension
            </h2>
            <p className="text-gray-500 font-medium text-md text-center max-w-lg">
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>
        </div>
    )
}
 
export const DownloadBtn = () => {
    return (
        <div className="py-32">
            <div className="flex justify-evenly mx-auto max-w-5xl px-10 py-5">
                <div className="flex flex-col gap-4 py-5 shadow-xl rounded-xl">
                    
                    <div className="flex flex-col  py-5 px-5  text-center gap-4 border-b-4 border-dotted border-gray-300">
                        <div className="flex justify-center">
                            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg"></img>
                        </div>
                        <h2>Add to Chrome</h2>
                        <p  className="text-gray-500">Minimum Version 62</p>
                    </div>
                    
                    <div className="bg-purple-500 font-semibold text-lg text-white py-3 px-6 rounded-lg cursor-pointer 
                                    mx-4 mt-2 border-2 border-transparent 
                                    hover:bg-white hover:text-purple-500 hover:border-2 hover:border-purple-500">
                            <p>Add & Install Extension</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-5 shadow-xl rounded-xl">
                    
                    <div className="flex flex-col  py-5 px-5  text-center gap-4 border-b-4 border-dotted border-gray-300">
                        <div className="flex justify-center">
                            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg"></img>
                        </div>
                        <h2>Add to Firefox</h2>
                        <p className="text-gray-500">Minimum Version 62</p>
                    </div>
                    
                    <div className="bg-purple-500 font-semibold text-lg text-white py-3 px-6 rounded-lg cursor-pointer 
                                    mx-4 mt-2 border-2 border-transparent 
                                    hover:bg-white hover:text-purple-500 hover:border-2 hover:border-purple-500">
                            <p>Add & Install Extension</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 py-5 shadow-xl rounded-xl">
                    
                    <div className="flex flex-col  py-5 px-5  text-center gap-4 border-b-4 border-dotted border-gray-300">
                        <div className="flex justify-center">
                            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg"></img>
                        </div>
                        <h2>Add to Opera</h2>
                        <p className="text-gray-500">Minimum Version 62</p>
                    </div>
                    
                    <div className="bg-purple-500 font-semibold text-lg text-white py-3 px-6 rounded-lg cursor-pointer 
                                    mx-4 mt-2 border-2 border-transparent 
                                    hover:bg-white hover:text-purple-500 hover:border-2 hover:border-purple-500">
                            <p>Add & Install Extension</p>
                    </div>
                </div>
            </div>

        
        </div>
    )
}