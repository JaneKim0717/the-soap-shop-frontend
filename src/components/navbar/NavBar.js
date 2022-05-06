import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ShoppingCart from '../shopping-cart/ShoppingCart'
import './NavBar.styles.scss'

function NavBar({ user, setUser }) {

  const history = useHistory()

  function handleLogout() {
    fetch("http://localhost:3000/signout", { 
      method: "DELETE", 
      }).then(() => onLogout());
  }

  function onLogout() {
    setUser(null)
    history.push('/')
  }

  function handleLogin() {
    history.push('/signin')
  }

  let button 
  if (user) {
    button = <button onClick={handleLogout}>LOGOUT</button>
  } else {
    button = <button onClick={handleLogin}>LOGIN</button>
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
          {button}
        </li>
      </ul>
      <ShoppingCart />
    </nav>
  )
}

export default NavBar;