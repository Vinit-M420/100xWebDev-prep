import { useEffect, useState, useRef } from "react"
import { DownArrow } from "../icons/DownArrow"

export const FAQ = () => {
    return (
            <div className="flex flex-col justify-center items-center mx-auto mt-20 px-6 snap-y snap-mandatory">
                <h2 className="md:text-4xl text-3xl text-black font-bold mb-6 text-center ">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-500 font-medium text-md text-center max-w-lg">
                    Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
    )
}

export const MostFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqRef = useRef(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() =>{
        const handleClickOutside = (event) => {
            if (faqRef.current && !faqRef.current.contains(event.target)) {
                setActiveIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }
    ,[])

    return (
            <div ref={faqRef} className="flex flex-col mx-auto lg:w-2xl md:w-xl w-[300px] py-4 mb-32">
                <div className="flex flex-col border-b border-gray-200 py-1">
                    <div className="flex justify-between py-3 px-1 text-gray-500 cursor-pointer"
                        onClick={() => toggleFaq(0)}>
                        <h2 className="hover:text-orange-500 font-semibold md:text-md text-sm">
                            What is Bookmark?</h2>
                        <DownArrow 
                        className={`transform duration-500 ${activeIndex === 0 ? 'rotate-180 text-orange-500' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 0 ? 'max-h-32' : 'max-h-0'}`}>
                        <p className="text-gray-400 mb-1 px-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border-b border-gray-200 py-1">
                    <div className="flex justify-between py-3 px-1 text-gray-500 cursor-pointer"
                        onClick={() =>  toggleFaq(1) }>
                        <h2 className="hover:text-orange-500 font-semibold md:text-md text-sm">
                            How can I request a new browser?</h2>
                        <DownArrow 
                        className={`transform duration-500 ${activeIndex === 1 ? 'rotate-180 text-orange-500' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 1 ? 'max-h-32' : 'max-h-0'}`}>
                        <p className="text-gray-400 mb-1 px-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>  
                
                <div className="flex flex-col border-b border-gray-200 py-1">
                    <div className="flex justify-between py-3 px-1 text-gray-500 cursor-pointer"
                        onClick={() =>  toggleFaq(2) }>
                        <h2 className="hover:text-orange-500 font-semibold md:text-md text-sm">
                            Is ther a mobile app?</h2>
                        <DownArrow 
                        className={`transform duration-500 ${activeIndex === 2 ? 'rotate-180 text-orange-500' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 2 ? 'max-h-32' : 'max-h-0'}`}>
                        <p className="text-gray-400 mb-1 px-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div> 

                <div className="flex flex-col border-b border-gray-200 py-1">
                    <div className="flex justify-between py-3 px-1 text-gray-500 cursor-pointer"
                        onClick={() =>  toggleFaq(3) }>
                        <h2 className="hover:text-orange-500 font-semibold md:text-md text-sm">
                            What about other Chromium browsers</h2>
                        <DownArrow 
                        className={`transform duration-500 ${activeIndex === 3 ? 'rotate-180 text-orange-500' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 3 ? 'max-h-32' : 'max-h-0'}`}>
                        <p className="text-gray-400 mb-1 px-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>    
            </div>     
    )
}

