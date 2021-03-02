import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
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

