
export const Button = ({
    disabled,
    onClick,
    children
}) => {
    
    return <div onClick={disabled ? undefined : onClick} 
            className={`rounded-xl px-32 py-4 text-white font-medium w-80 text-center
                        ${disabled ? 'bg-mygrey cursor-not-allowed' : 'bg-mygreen cursor-pointer'}`}>
        {children}
    </div>
}