

export const SidebarOverlay = () => {
    return (
                <div className="h-screen w-60 transition-all duration-100 bg-neutral-800 
                                shadow-xl fixed left-0 top-0 z-40 md:relative md:z-auto md:shadow-none">
                    <div className="flex flex-col mx-5 my-8 gap-2">
                        <div className="flex justify-between p-1">
                            <h2 className="font-bold text-white text-lg">My Lists</h2>
                            <div className="p-1 hover:border hover:border-neutral-500 rounded-sm flex items-center cursor-pointer
                                            border border-transparent"
                                onClick={ () => { 
                                    setToggleSidebar(!toggleSidebar);
                                    //console.log("SideBar toggled"); 
                                    } }>
                                <SidebarClose  />
                            </div>
                        </div>
                        <div className="mb-1 p-1">
                            <h4 className="font-bold text-white text-md">Created by Me</h4>
                        </div>
                        <div className="flex justify-between bg-neutral-700 hover:bg-neutral-600 rounded-lg py-1 px-2">
                            <div className="flex gap-2">
                                <div className="bg-star-100 rounded-lg p-1">
                                    <Star className = 'fill-yellow-500' />
                                </div>
                                <h4 className="flex items-center font-bold text-white text-lg">Favorite</h4>
                            </div>
                            <div className="flex items-center">
                                <Lock size="20"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
}