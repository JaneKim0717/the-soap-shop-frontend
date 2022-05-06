import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from './context/ProductsContext'
import CartContextProvider from './context/CartContext'
import store from './components/Store';



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <ProductsContextProvider>
      <CartContextProvider>


          <App />


      </CartContextProvider>
    </ProductsContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
