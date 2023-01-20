import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CuctomThemeProvider } from 'components/services/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <CuctomThemeProvider>
        <App />
      </CuctomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
