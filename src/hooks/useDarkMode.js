import {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(false);
    const [storedValue, setValue] = useLocalStorage("darkMode", 'true');

    const flipBoolean = (value) => {
        setDarkMode(value);
        setValue(isDarkMode);
    }

    useEffect(() => {
     if  (storedValue===false) {
       document.body.className = 'dark-mode'
     }
     else{
       document.body.className = ''
     };

    }, [storedValue]);
    return [isDarkMode, flipBoolean]
};

export default useDarkMode;
