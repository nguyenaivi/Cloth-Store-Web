import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShopContextProvider from './Context/ShopContext';
import AuthProvider from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
  <ShopContextProvider>
      <App />
  </ShopContextProvider>
</AuthProvider>
);
