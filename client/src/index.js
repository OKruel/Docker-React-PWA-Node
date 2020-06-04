import React from 'react';
import ReactDOM from 'react-dom';
//Router
import { BrowserRouter } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Style
import './sass/index.scss';
//Components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

