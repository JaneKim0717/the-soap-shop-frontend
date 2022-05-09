import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



function CartItems(props) {

  const { name, image, price, quantity, id, description, increase, decrease, removeProduct } = props;
  const product = { name, image, price, quantity, id, description }


  return (
    <>
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
            <AddIcon width='20px' />
          </button>

          <button className="btn-decrease" onClick={() => decrease(product)} >
            <RemoveIcon width='20px' />
          </button>

          <button className="btn-trash" onClick={() => removeProduct(product)}>
            <DeleteOutlineIcon width='20px' />
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItems