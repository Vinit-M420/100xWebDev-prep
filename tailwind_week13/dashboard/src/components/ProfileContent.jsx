import bokuto from '../assets/bokuto.jpg';

export const ProfileContent = () => {
    return <>
        <img src={bokuto} alt="bokuto" className="mx-auto rounded-xl w-30 h-30 shadow-md "/>
        <h2 className="font-bold text-xl my-3">Vinit M</h2>
        <p className="text-gray-500">vinit@gmail.com</p>
        <p className="text-gray-500">9233129345</p>
        <p className="text-gray-500 mt-3">Mumbai, India</p>
    </>
}