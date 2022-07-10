import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RGBContextProvider } from './components/Application/context';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RGBContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </RGBContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
