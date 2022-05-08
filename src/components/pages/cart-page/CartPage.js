import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Layout from '../../shared/Layout'
import CartItems from './CartItems'
import Total from './Total'
import styled from "styled-components";
import './CartPage.styles.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #44403c;
    color:white;
    cursor: pointer;
    font-weight: 600;
    margin-top: 30px;
`;

function CartPage() {

  const {cartItems, itemCount, total, increase, decrease, removeProduct, clearCart} = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct }

  let history = useHistory()

  return (
    <Layout>
      <>
        <h1>C A R T</h1>
        {
          cartItems.length === 0 ? 
          <div className="empty-cart">
            YOUR CART IS EMPTY
            <div>
              <Button onClick={() => history.push('/shop')}>SHOP OUR PRODUCTS</Button>
            </div> 
          </div> 
          : 
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {
                  cartItems.map(item => <CartItems {...item} key={item.id} {...funcs}/>)
                }
              </div>
              <Total itemCount={itemCount} total={total} clearCart={clearCart}  />
            </div>
          </>
        }
      </>
    </Layout>
  )
}

export default CartPage