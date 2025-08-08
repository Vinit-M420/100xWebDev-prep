import { Recording } from "../icons/recording"

export const Meetings = ()=> {
    return (
        <div className="flex flex-col">
            <div className="flex border-b border-gray-200">
                <div className="flex flex-col text-left border-r border-mblue-300 p-2 m-1">
                    <h1 className="font-semibold lg:text-lg md:text-md text-sm">10:30 AM</h1>
                    <h3 className="font-semibold lg:text-sm text-xs text-gray-500">10:30 AM</h3>
                </div>
                <div className="flex flex-col lg:p-2 p-1 m-1 cursor-pointer">
                    <div className="flex gap-2 ">
                        <h5 className="font-semibold text-xs text-gray-500">Live</h5>
                        <div className=''>
                        <Recording width={15} height={15} fill={'red'}/>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold lg:text-lg text-sm">UX Webinar</h2>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-gray-200">
                <div className="flex flex-col text-left border-r border-mblue-300 p-2 m-1">
                    <h1 className="font-semibold lg:text-lg md:text-md text-sm">10:30 AM</h1>
                    <h3 className="font-semibold md:text-sm text-xs text-gray-500">10:30 AM</h3>
                </div>
                <div className="flex flex-col p-2 m-1 cursor-pointer">
                    <div className="flex gap-2">
                        <h5 className="font-semibold text-xs  text-gray-500">Upcoming</h5>
                        <div className=''>
                        <Recording width={15} height={15} fill={'#268ffe'}/>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold lg:text-lg text-sm">My First Webinar</h2>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-gray-200">
                <div className="flex flex-col text-left border-r border-mblue-300 p-2 m-1">
                    <h1 className="font-semibold lg:text-lg md:text-md text-sm">10:30 AM</h1>
                    <h3 className="font-semibold md:text-sm text-xs text-gray-500">10:30 AM</h3>
                </div>
                <div className="flex flex-col p-2 m-1 cursor-pointer">
                    <div className="flex gap-2">
                        <h5 className="font-semibold text-xs text-gray-500">Upcoming</h5>
                        <div className=''>
                        <Recording width={15} height={15} fill={'#268ffe'}/>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold lg:text-lg text-sm">Important Webinar</h2>
                    </div>
                </div>
            </div>

            <div className="flex ">
                <div className="flex flex-col text-left border-r border-mblue-300 p-2 m-1">
                    <h1 className="font-semibold lg:text-lg md:text-md text-sm">10:30 AM</h1>
                    <h3 className="font-semibold md:text-sm text-xs text-gray-500">10:30 AM</h3>
                </div>
                <div className="flex flex-col p-2 m-1 cursor-pointer">
                    <div className="flex gap-2">
                        <h5 className="font-semibold text-xs text-gray-500">Upcoming</h5>
                        <div className=''>
                        <Recording width={15} height={15} fill={'#268ffe'}/>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold lg:text-lg  text-sm">Webinar 1</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )

}