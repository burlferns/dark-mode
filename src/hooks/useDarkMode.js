import {useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage';

export function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode",initialValue);

  useEffect(()=>{
    const bodyElm = document.getElementsByTagName('body');
    if(darkMode) {
      bodyElm[0].classList.add('dark-mode');
    } else {
      bodyElm[0].classList.remove('dark-mode');
    }
  },[darkMode])

  return [darkMode,setDarkMode];
} 