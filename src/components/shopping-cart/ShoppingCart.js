import React from 'react';
import shoppingBag from '../../assets/shopping-bag.png';
import './ShoppingCart.styles.scss'

function ShoppingCart() {
  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      <span className='cart-count'>5</span>
    </div>
  )
}

export default ShoppingCart;