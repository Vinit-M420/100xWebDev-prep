import { Bookmark } from "../icons/bookmark";

export const Header = () => {
    return (
        <div className="flex justify-around py-10 items-center">
            <div className="flex gap-3">
                <div className="bg-purple-500 rounded-3xl p-1.5 flex items-center">
                    <Bookmark size={16} />
                </div>
                <h1 className="text-xl font-bold">BOOKMARK</h1>
            </div>
            <div className="flex gap-10 items-center">
                <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium">FEATURES</h2>
                <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium">DOWNLOAD</h2>
                <h2 className="tracking-widest hover:text-orange-500 text-gray-500 font-medium">FAQ</h2>
                <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 rounded-lg py-2 px-8
                                border-2 border-transparent hover:border-2 hover:border-orange-500">
                    <h3>LOGIN</h3>
                </div>
            </div>

        </div>
    )
}