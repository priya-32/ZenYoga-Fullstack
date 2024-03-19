import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store
import App from './App.jsx';
import './assets/Css/core.css';
import './assets/Css/Style.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap your App component with Provider and pass the Redux store */}
    <App />
  </Provider>
);
