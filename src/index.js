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
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <ProductsContextProvider>
      <CartContextProvider>

        <Elements stripe={stripePromise}>
          <App />
        </Elements>



      </CartContextProvider>
    </ProductsContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
