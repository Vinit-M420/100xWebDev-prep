
export const Input =({
    onChange,
    type, 
    placeholder
}) => {
    
    return <div  className={`w-80 mb-8`}>

        <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-4 rounded-xl text-white font-medium bg-blue-500 text-balance" />

    </div>
}