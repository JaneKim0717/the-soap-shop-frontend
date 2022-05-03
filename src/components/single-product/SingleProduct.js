import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import { CartContext }from '../../context/CartContext'
import { isInCart } from '../../Helpers'
import Layout from '../shared/Layout'
import './SingleProduct.styles.scss'

function SingleProduct({match, history: { push } }) {

  const { products } = useContext(ProductsContext)
  const { addProduct, cartItems, increase } = useContext(CartContext)
  const { id } = match.params
  
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));
    if (!product) {
      return push('/shop')
    }
    setProduct(product)
  }, [id, product, push, products]);
  
  if (!product) {return null}


  
  const { image, name, price, description, ingredients } = product
  const itemInCart = isInCart(product, cartItems)

  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img className='single-product-img' src={image} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h1>{name}</h1>
            <h2>${price}.00</h2>
          </div>
          <div className='add-to-cart-btns'>
            {
              !itemInCart &&             
              <button className='button is-white nomad-btn' id='btn-white-outline' 
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
            <button className='button is-black nomad-btn' id='btn-white-outline'>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className='product-description'>
            <p>DESCRIPTION: {description}</p>
            <p>INGREDIENTS: {ingredients}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withRouter(SingleProduct)