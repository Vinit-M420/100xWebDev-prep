import { useState } from "react"
import { Check } from "../icons/check"

export const Leet = ( {children } ) => {
    const [useDifficulty, setDifficulty] = useState('easy');

    const Difficulty = () => {
        if (useDifficulty === 'easy'){
            return <h2 className="font-semibold text-blue-400">
                    Easy
            </h2>
        }
        else if (useDifficulty === 'med'){
            return <h2 className="font-semibold text-yellow-400">
                    Medium
            </h2>
        }
        else if (useDifficulty === 'hard'){
            return <h2 className="font-semibold text-red-400">
                    Hard
            </h2>   
        }
        }
    

        return ( 
            <div className="flex justify-between m-1 pl-2 pr-6 py-2">
                <div className="flex gap-3">
                    <div className="flex items-center">
                        <Check size="20" />
                    </div>
                    <h2 className="font-semibold">
                        {children}
                    </h2>
                </div>
                <div>
                    <Difficulty />
                </div>
            </div>
        )

}