import bokuto from '../assets/bokuto.jpg';

export const Content = () => {

    return (
    <>
        <div className="bg-gray-800 h-screen w-full">
            <div className='h-40 w-full bg-black'/>
        

        <div className="grid grid-cols-11 px-10">
            <div className="h-80 mr-5 rounded-2xl shadow md:col-span-3 bg-white -translate-y-10 
                flex flex-col items-center justify-center text-center py-8 px-4 col-span-11">
                <img src={bokuto} alt="my pic" className="rounded-xl w-30 h-30 shadow-md"/>
                <h2 className="font-bold text-xl my-3">Vinit M</h2>
                <p className="text-gray-500">vinit@gmail.com</p>
                <p className="text-gray-500">9233129345</p>
                <p className="text-gray-500 mt-3">Mumbai, India</p>
            </div>
            <div className="h-124 rounded-2xl shadow md:col-span-5 p-5 text-white col-span-11">
                <p className='font-medium text-md '>Wednesday, 6 October</p>
                <h1 className='font-bold text-3xl my-5'>Good Morning, Vinit! 👋</h1>
                
                <div className="h-72 rounded-2xl shadow p-5 bg-gray-500">

                </div>
            </div>
            <div className="h-72 ml-5 rounded-2xl shadow md:col-span-3 bg-gray-200 translate-y-30 col-span-11">
                
            </div>

        </div>
        </div>
    </>
    )
}