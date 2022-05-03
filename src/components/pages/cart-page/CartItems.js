import React from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons/Icons"; 

function CartItems(props) {

  const { name, image, price, quantity, id, description, increase, decrease, removeProduct } = props;
  const product = { name, image, price, quantity, id, description }


  return (
    <div className="cart-item">
    <div className="item-image">
      <img src={image} alt='product'/>
    </div>
    <div className="name-price">
      <h4>{name}</h4>
      <p>${price}.00</p>
    </div>
    <div className="quantity">
      <p>{`QUANTITY: ${quantity}`}</p>
    </div>
    <div className="btns-container">
      <button className="btn-increase" onClick={() => increase(product)}>
        <PlusCircleIcon width='20px' />
      </button>
      {
        quantity === 1 && 
        <button className="btn-trash" onClick={() => removeProduct(product)}>
          <TrashIcon width='20px' />
        </button>
      }
      {
        quantity > 1 && 
        <button className="btn-decrease" onClick={() => decrease(product)} >
          <MinusCircleIcon width='20px' />
        </button>
      }
    </div>
  </div>
  )
}

export default CartItems