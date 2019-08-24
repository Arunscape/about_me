import React, { createContext, useReducer } from 'react';
import { light } from '@material-ui/core/styles/createPalette';

interface theme {
    theme: 'light' | 'dark',
    value: boolean,
}

const darkTheme: theme = {
    theme: 'dark',
    value: true,
}


const lightTheme: theme = {
    theme: 'light',
    value: false,
}

export const ThemeContext = createContext(lightTheme);


const themeReducer = (state: any, action: any) => {

    switch (action.type) {
        case 'darkMode':
            localStorage.setItem('theme', 'dark')
            return { ...darkTheme }
        case 'lightMode':
            localStorage.setItem('theme', 'light')
            return { ...lightTheme }
        default:
            return state;

    }
}

export const ThemeProvider = ({ children }: { children: any }) => {

    const localTheme = localStorage.getItem('theme')
    if (!localTheme || (localTheme !== 'light' && localTheme !== 'dark')) {
        localStorage.setItem('theme', 'light')
    }


    const initialState = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;
    return (
        // @ts-ignore
        <ThemeContext.Provider value={useReducer(themeReducer, initialState)} >
            {children}
        </ThemeContext.Provider >
    );
}

export default ThemeProvider