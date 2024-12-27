// Theme provider component that wraps the application with Material-UI theme
// and CSS baseline styles for consistent rendering across browsers
import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './Theme';

import { CssBaseline } from '@mui/material';
import './index.scss';
import './base.scss';

interface ThemeProviderProps {
  children: React.ReactNode;
  isDarkMode?: boolean;
}

const ThemeProvider = ({ children, isDarkMode = false }: ThemeProviderProps) => {
    const theme = isDarkMode ? darkTheme : lightTheme;
    
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
