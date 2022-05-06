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
import './App.scss';




function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user));
      }
    });
  }, []);



  return (
    <div className="App">
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
            <SingleProduct /> 
          </Route>

          <Route exact path='/cart'> 
            <CartPage /> 
          </Route> 

          <Route exact path='*'> 
            <NotFound /> 
          </Route>
        </Switch>
    </div>
  );
}

export default App;
