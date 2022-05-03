import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom';
import { isInCart } from '../../Helpers';
import { CartContext } from '../../context/CartContext';
import './FeaturedProduct.styles.scss'

function FeaturedProduct(props) {

  const {name, image, price, history, id, description } = props;
  const product = { name, image, price, id, description }
  const { addProduct, cartItems, increase } = useContext(CartContext)
  const itemInCart = isInCart(product, cartItems)

  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={image} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{name}</h3>
        <p>${price}.00</p>
        {
          !itemInCart &&
          <button className='button is-black nomad-btn' 
          onClick={() => addProduct(product)}>
            ADD TO CART
          </button>
        }
        {
          itemInCart &&
          <button className='button is-white nomad-btn' id='btn-white-outline' 
          onClick={() => increase(product)}>
            ADD MORE
          </button>
        }
      </div>
    </div>
  )
}

export default withRouter(FeaturedProduct);