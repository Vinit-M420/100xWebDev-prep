import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store';

const Theme = () => {
    const { isDark, setDarkMode } = useThemeStore();

    return (
        <div className='fixed top-6 left-10 cursor-pointer p-2 rounded-2xl border border-gray-300
                        dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 
                        transition duration-200 bg-white dark:bg-gray-900'
            onClick={() => {
                setDarkMode(!isDark);
                }}>
            
            {isDark ? 
                <Moon className='text-gray-100' /> :       
                <Sun className='text-gray-900' />}
        </div>
    )
}

export default Theme;