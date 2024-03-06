import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Theme } from './styles/styledComponentsMUI';
import { ThemeProvider } from '@mui/material/styles';

import './styles/global.module.scss';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
