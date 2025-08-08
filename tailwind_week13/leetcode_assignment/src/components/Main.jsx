import { useState } from "react"


export const Main = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
        <div className="w-full bg-neutral-900 text-white">
            <div className="grid grid-cols-5 gap-5 m-10">
                <div className="col-span-2 bg-neutral-600">
                    
                </div>
                <div className="col-span-3 bg-neutral-500">
                    <h1>HELLO</h1>
                </div>

            </div>
        </div>
    )
}