import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Shop from './components/pages/Shop';
import SingleProduct from './components/single-product/SingleProduct';
import CartPage from './components/pages/cart-page/CartPage';
import NavBar from './components/navbar/NavBar';
// import SignIn from './components/sign-in/SignIn';
import SignUpForm from './components/sign-up/SignUpForm';
import AboutUs from './components/AboutUs';
import Announcement from './components/Announcement';
import Checkout from './components/checkout/Checkout';
import Success from './components/checkout/stripe-checkout/Success';
import Canceled from './components/checkout/stripe-checkout/Canceled';
import './App.scss';



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`)
      .then((res) => {
        if (res.ok) {
          res.json()
          .then((userData) => {
            setUser(userData)
            console.log(userData)
          });
        }
      });
    }
  }, []);



  return (
    <div className="App">
      <Announcement />
      <NavBar user={user} setUser={setUser}/>  
        <Switch>
          <Route exact path='/'> 
            <HomePage user={user} /> 
          </Route>

          <Route exact path='/shop'> 
            <Shop /> 
          </Route> 

          <Route exact path='/about'> 
            <AboutUs /> 
          </Route> 

          <Route exact path='/signin'> 
            <SignUpForm setUser={setUser} /> 
          </Route>

          <Route exact path='/product/:id'> 
            <SingleProduct setUser={setUser} /> 
          </Route>

          <Route exact path='/cart'> 
            <CartPage /> 
          </Route> 

          <Route exact path='/checkout'> 
            <Checkout /> 
          </Route> 

          <Route exact path='/success'> 
            <Success /> 
          </Route> 

          <Route exact path='/canceled'> 
            <Canceled /> 
          </Route> 

          <Route exact path='*'> 
            <NotFound /> 
          </Route>
        </Switch>
    </div>
  );
}

export default App;
