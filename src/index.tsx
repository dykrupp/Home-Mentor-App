import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    body1: {
      color: 'hsl(0, 0%, 63%)',
      fontSize: '14px'
    },
    h4: {
      fontWeight: 700,
      color: 'hsl(0, 0%, 0%)',
      fontSize: '40px'
    },
    fontFamily: [
      'Spartan',
      'sans-serif'
    ].join(',')
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
