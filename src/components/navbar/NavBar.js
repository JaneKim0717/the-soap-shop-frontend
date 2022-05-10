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
    localStorage.clear()
    history.push('/')
  }

  function handleLogin() {
    history.push('/signin')
  }

  let toggleLogInOut 
  if (user) {
    toggleLogInOut = <Link to='/signout' onClick={handleLogout}>LOGOUT</Link>
  } else {
    toggleLogInOut = <Link to='/signin' onClick={handleLogin}>LOGIN</Link>
  }

  return (

    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>THE SOAP SHOP</Link>
      </div>
      <ul>
        <li>
        <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/shop'>SHOP</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          {toggleLogInOut}
        </li>
      </ul>
      <ShoppingCart />
    </nav>
  )
}

export default NavBar;