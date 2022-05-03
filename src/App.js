import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Shop from './components/pages/Shop';
import SingleProduct from './components/single-product/SingleProduct';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/product/:id' component={SingleProduct} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
