import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ShoppingCart from '../shopping-cart/ShoppingCart'
import './NavBar.styles.scss'

function NavBar({ user, setUser }) {

  const history = useHistory()

  function handleLogout() {
    fetch("http://localhost:3000/logout", { 
      method: "DELETE" 
      }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push('/')
      }
    });
  }

  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>THE SOAP SHOP</Link>
      </div>
      <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          {!user ? <Link to="/signin">Login</Link> : <Link to="/logout" onClick={handleLogout}>Logout</Link>}
        </li>
      </ul>
      <ShoppingCart />
    </nav>
  )
}

export default NavBar;