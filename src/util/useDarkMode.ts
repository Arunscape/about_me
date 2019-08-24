import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './themeContext';


interface theme {
    theme: 'light' | 'dark',
    value: boolean,
}
export default () => {
    const [theme, setTheme] = useState({
        theme: 'light',
        value: false,
    })

    // @ts-ignore
    const [_, dispatch] = useContext(ThemeContext);

    const updateTheme = (t: theme) => {
        setTheme(t);
        localStorage.setItem('theme', t.theme)
        dispatch({
            type: t.value ? 'darkMode' : 'lightMode'
        })
        console.log(_)
    }

    const toggleTheme = () => updateTheme({
        theme: theme.theme === 'light' ? 'dark' : 'light',
        value: !theme.value,
    })

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme({
                theme: localTheme,
                value: localTheme === 'dark',
            })
        }
    }, [])

    return {
        theme,
        updateTheme,
        toggleTheme,
    }
}