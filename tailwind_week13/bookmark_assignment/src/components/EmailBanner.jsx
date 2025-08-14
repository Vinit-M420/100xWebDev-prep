
export const EmailBanner = () => {

    return <div className="bg-purple-500 py-24 mx-auto">
        <div className="flex flex-col gap-6 items-center text-white">
            <h3 className="text-semibold tracking-widest text-lg uppercase" >35,000+ ALREADY JOINED</h3>
            <h1 className="text-3xl font-semibold max-w-sm text-center mb-2">Stay up-to-date with what we're doing</h1>
            <div className="flex gap-4">
                <input type="text" id="user-email" placeholder="Enter your email address" 
                    className="block font-medium bg-white text-gray-600 rounded-lg px-8 py-2" />
                <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 rounded-lg py-2 px-8
                                border-2 border-transparent hover:border-2 hover:border-orange-500 font-bold">
                    Contact Us
                </div>
            </div>
        </div>

    </div>
}