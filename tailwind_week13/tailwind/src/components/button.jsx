
export const Button = ({
    disabled,
    onClick,
    children
}) => {
    
    return <div onClick={onClick} 
            className={`rounded-xl px-32 py-4 cursor-pointer text-white font-medium w-80 text-center
                        ${disabled ? 'bg-mygrey' : 'bg-mygreen'}`}>
        {children}
    </div>
}