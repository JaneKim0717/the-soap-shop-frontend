import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom';
import { isInCart } from '../../Helpers';
import { CartContext } from '../../context/CartContext';
import styled from "styled-components";
import './FeaturedProduct.styles.scss'


const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #f5f5f4;
    color:black;
    cursor: pointer;
    font-weight: 600;
    display: block;
    width: 100%;
    line-height: 1.4;
    padding-left: 5px;
    padding-right: 5px;
    white-space: normal;
    margin-top: 0;
    margin-bottom: 10px;
    min-height: 44px;
`;

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
          <Button
          onClick={() => addProduct(product)}>
            ADD TO CART
          </Button>
        }
        {
          itemInCart &&
          <Button className='button is-white' 
          onClick={() => increase(product)}>
            ADD MORE
          </Button>
        }
      </div>
    </div>
  )
}

export default withRouter(FeaturedProduct);