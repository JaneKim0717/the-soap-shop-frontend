import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from '../shopping-cart/ShoppingCart'
import './NavBar.styles.scss'

function NavBar() {
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
      </ul>
      <ShoppingCart />
    </nav>
  )
}

export default NavBar;