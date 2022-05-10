import React, { useContext, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { CartContext } from '../../../context/CartContext'
import { fetchFromAPI } from '../../../Helpers'
import styled from "styled-components";


const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #44403c;
    color:white;
    cursor: pointer;
    font-weight: 600;
    display: block;
    width: 470px;
    line-height: 1.4;
    padding-left: 5px;
    padding-right: 5px;
    white-space: normal;
    margin-top: 10px;
    margin-bottom: 5px;
    min-height: 44px;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
`;

function StripeCheckout() {

  const [email, setEmail] = useState("")
  const { cartItems } = useContext(CartContext)
  const stripe = useStripe()

  const handleGuestCheckout = async (e) => {
    e.preventDefault()
    const line_items = cartItems.map(item => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100, 
          product_data: {
            name: item.name, 
            description: item.description,
            images: [item.image],
          }
        }
      }
    });

    const response = await fetchFromAPI('create-checkout-session', {
      body: { line_items , customer_email: email },
    }); 

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId
    });

    if (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleGuestCheckout}>
      <div>
        <Input 
          type='email'
          onChange={e => setEmail(e.target.value)}
          placeholder='EMAIL'
          value={email}
          className='nomad-input'
        />
      </div>
      <div className='submit-btn'>
        <Button type='submit'>
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </form>
  )
}

export default StripeCheckout