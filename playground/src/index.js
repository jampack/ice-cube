import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './css/playground.css';

import {ThemeProvider} from 'ice-cube/components';
import {DefaultTheme} from 'ice-cube/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'light', ...DefaultTheme }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
