import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'hsl(0, 0%, 0%)',
        },
        secondary: {
            main: 'hsl(0, 0%, 100%)',
        },
    },
    typography: {
        body1: {
            color: 'hsl(0, 0%, 63%)',
            fontSize: '14px',
            margin: '15px 0px',
        },
        h4: {
            fontWeight: 700,
            color: 'hsl(0, 0%, 0%)',
            fontSize: '40px',
            fontFamily: 'sans-serif',
            lineHeight: 1,
        },
        h6: {
            fontWeight: 700,
            fontSize: '16px',
            color: 'hsl(0, 0%, 0%)',
            fontFamily: 'sans-serif',
            letterSpacing: '3px',
        },
        fontFamily: ['Spartan', 'sans-serif'].join(','),
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
