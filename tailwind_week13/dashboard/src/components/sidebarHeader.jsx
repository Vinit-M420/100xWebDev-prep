import bokuto from '../assets/bokuto.jpg';

export const SideBarHeader = () => {

    return (
    <>
        <div className='flex justify-between'>
            <h3 className='rounded-xl text-lg text-white font-bold bg-gray-700 px-2 py-2 h-12'>Webinar
                <span>.gg</span>
            </h3>
            <div className='flex'>
                <img src={bokuto} alt="my pic"
                    className='rounded-xl h-10'/>
        
            </div>
        </div>
    </>
    )
}