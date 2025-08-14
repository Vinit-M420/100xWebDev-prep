import { useState } from "react"
import { DownArrow } from "../icons/DownArrow"

export const FAQ = () => {
    return (
            <div className="flex flex-col justify-center items-center mx-auto mt-20 px-6 max-w-5xl">
                <h2 className="text-4xl text-black font-bold mb-6 text-center ">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-500 font-medium text-md text-center max-w-lg">
                    Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>

    )
}

export const MostFAQ = () => {
    const [faq1 ,  setFaq1] = useState(false);
    const [faq2 ,  setFaq2] = useState(false);

    return (
            <div className="flex flex-col mx-auto max-w-3xl py-4 ">
                
                <div className="flex flex-col border-b border-gray-200 py-1 ">
                    <div className="flex justify-between py-3 px-1 text-gray-500 cursor-pointer"
                        onClick={() => setFaq1(!faq1)}>
                        <h2 className="hover:text-orange-500">
                            What is Bookmark?</h2>
                        <DownArrow 
                        className={`transform duration-200 ${faq1 ? 'rotate-180 text-orange-500' : ''}`} />
                    </div>
                    <p className={`text-gray-400 transition duration-200 ${faq1 ? 'block' : 'hidden'}`} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?
                    </p>
                </div>

                <div className="flex flex-col border-b border-gray-200 py-1">
                    <div className="flex justify-between py-3 px-1 text-gray-500 cursor-pointer"
                        onClick={() => setFaq2(!faq2) }>
                        <h2 className="hover:text-orange-500">
                            How can I request a new browser?</h2>
                        <DownArrow 
                        className={`transform duration-200 ${faq2 ? 'rotate-180 text-orange-500' : ''}`} />
                    </div>
                    <p className={`text-gray-400 transition duration-200 ${faq2 ? 'block' : 'hidden'}`} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?
                    </p>
                </div>

            
            </div>

            
    )
}

