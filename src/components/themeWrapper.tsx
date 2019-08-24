import React, { useState, useContext, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeContext } from '../util/themeContext';

const MaterialThemeWrapper = ({ children }: { children: any }) => {

    // @ts-ignore
    const [theme] = useContext(ThemeContext)


    const [materialTheme, setMaterialTheme] = useState({
        palette: {
            type: theme.theme
        }
    });

    useEffect(() => {
        setMaterialTheme({
            palette: {
                type: theme.theme
            }
        })
    }, [theme])

    // @ts-ignore
    const muiTheme = createMuiTheme(materialTheme);
    return (
        // @ts-ignore
        <MuiThemeProvider theme={muiTheme}>
            {children}
        </MuiThemeProvider>
    );
}

export default MaterialThemeWrapper;