import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RGBContextProvider } from './components/Application/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RGBContextProvider>
        <App />
      </RGBContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
