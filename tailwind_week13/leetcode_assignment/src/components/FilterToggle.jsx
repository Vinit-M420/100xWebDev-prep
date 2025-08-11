import { Refresh } from "../icons/refresh"


export const FilterToggle = ( { children } ) => {
    if (children){
    return (
        <div className="inline-flex flex-col gap-3 p-5 rounded-xl bg-neutral-800 font-semibold
                        border border-neutral-600 shadow-md transition-all duration-100 absolute z-50">
            <h2>Status</h2>
            <div className="flex gap-5">
                <div className="flex gap-2">
                    <input type="checkbox" value="Todo" class="cursor-pointer accent-white"></input>
                    <label>Todo</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" value="Solved" class="cursor-pointer accent-white"></input>
                    <label>Solved</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" value="Attempted" class="cursor-pointer accent-white"></input>
                    <label>Attempted</label>
                </div>
            </div>

            <h2>Difficulty</h2>
            <div className="flex gap-3">
                <div className="flex gap-2">
                    <input type="checkbox" value="easy" class="cursor-pointer accent-white"></input>
                    <label className="text-blue-400">Easy</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" value="medium" class="cursor-pointer accent-white"></input>
                    <label className="text-yellow-400">Medium</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" value="hard" class="cursor-pointer accent-white"></input>
                    <label className="text-red-400">Hard</label>
                </div>
            </div>

            <div className="flex gap-2">
                <input type="checkbox" value="tags" class="cursor-pointer accent-white"></input>
                <label>Show tags</label>
            </div>
            <div className="flex gap-2 justify-center border border-neutral-700 p-1 rounded-md
                            hover:bg-neutral-700 hover:border-neutral-600">
                <div className="flex items-center">
                    <Refresh size='16' />
                </div>
                <span>Reset</span>
            </div>
        </div>
    )
    } else{
        return <></>
    }
} 