import React from 'react'
import { withRouter } from 'react-router-dom';
import './FeaturedProduct.styles.scss'

function FeaturedProduct(props) {

  const {name, image, price, history, id} = props;

  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={image} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{name}</h3>
        <p>${price}.00</p>
        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </div>
  )
}

export default withRouter(FeaturedProduct);