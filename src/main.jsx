import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const baseUrl = '/e-plantshoppinge'; // Replace with your actual base URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={baseUrl}> {/* Set the base URL here */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
