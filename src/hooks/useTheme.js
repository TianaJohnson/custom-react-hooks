import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {

    const [theme, setTheme] = useLoacalStorage("theme", "light")

    useEffect(() => {
        document.body.className = " "
        document.body.classList.add(theme)

    }, [theme]);

    return setTheme; 
};