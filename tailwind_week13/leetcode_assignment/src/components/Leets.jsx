import { useState } from "react"
import { Check } from "../icons/check"

export const Leet = ( {children } ) => {
    const [useDifficulty, setDifficulty] = useState('easy');

    function difficulty() {
        if (useDifficulty === 'easy'){
            <h2 className="font-semibold text-blue-400">
                    Easy
            </h2>
        }
        else if (useDifficulty === 'med'){
            <h2 className="font-semibold text-yellow-400">
                    Medium
            </h2>
        }
        else if (useDifficulty === 'hard'){
            <h2 className="font-semibold text-red-400">
                    Hard
            </h2>
        }
        }
    

        return ( 
            <div className="flex justify-between m-1 px-2 py-2">
                <div className="flex gap-2">
                    <Check />
                    <h2 className="font-semibold">
                        {children}
                    </h2>
                </div>
                <div>
                    <h2 className="font-semibold text-blue-400">
                        Easy
                    </h2>
                </div>
            </div>
        )

}