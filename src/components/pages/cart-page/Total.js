import React from 'react'
import { withRouter } from 'react-router-dom'

function Total({ itemCount, total, history, clearCart }) {
  return (
    <div className='order-summary'>
      <div className="total-container">
        <h2>ORDER SUMMARY</h2>
        <div className="total">
          <h3>Total Items: {itemCount}</h3>
          <h3>{`Total Amount: $${total}.00`}</h3>
        </div>
        <div className="checkout">
          <button className="button is-black" onClick={() => history.push('/checkout')}>CHECKOUT</button>
        </div>
        <div className="checkout">
          <button className="button is-white" onClick={() => clearCart()}>CLEAR CART</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Total)