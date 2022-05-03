import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Shop from './components/pages/Shop';
import SingleProduct from './components/single-product/SingleProduct';
import CartPage from './components/pages/cart-page/CartPage';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/product/:id' component={SingleProduct} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
