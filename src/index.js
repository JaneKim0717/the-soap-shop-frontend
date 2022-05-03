import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from './context/ProductsContext'
import CartContextProvider from './context/CartContext'

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
