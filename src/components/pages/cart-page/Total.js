import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 40vh;
  width: 400px;
`;

const SummaryTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
  letter-spacing: 1px;
`;

const SummaryItem = styled.div`
  width: 400px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  font-size: 1em;
`;

const SummaryItemTextTotal = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const SummaryItemPrice = styled.span`
  font-size: 1em;
`;

const SummaryItemPriceTotal = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #44403c;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  border: none;
`;

const ButtonClearCart = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  color: black;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  border: none;
`;



function Total({ itemCount, total, history, clearCart }) {
  return (
    <Wrapper>
      <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <Bottom>

            <div className='order-summary'>
              <div className="total-container">

              <SummaryItem>
                <SummaryItemText>ITEM COUNT:</SummaryItemText>
                <SummaryItemPrice>{itemCount}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>SUBTOTAL:</SummaryItemText>
                <SummaryItemPrice>${total}.00</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>FREE SHIPPING:</SummaryItemText>
                <SummaryItemPrice>$0.00</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemTextTotal>TOTAL AMOUNT:</SummaryItemTextTotal>
                <SummaryItemPriceTotal>${total}.00</SummaryItemPriceTotal>
              </SummaryItem>

              <Button onClick={() => history.push('/checkout')}>CHECKOUT</Button>

              <ButtonClearCart onClick={() => clearCart()}>CLEAR CART</ButtonClearCart>

            </div>
          </div>
        </Bottom>
      </Summary>
    </Wrapper>










    // <div className='order-summary'>
    //   <div className="total-container">
    //     <div className="total">
    //       <h3>Total Items: {itemCount}</h3>
    //       <h3>{`Total Amount: $${total}.00`}</h3>
    //     </div>
    //     <div className="checkout">
    //       <button className="button is-black" onClick={() => history.push('/checkout')}>CHECKOUT</button>
    //     </div>
    //     <div className="checkout">
    //       <button className="button is-white" onClick={() => clearCart()}>CLEAR CART</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default withRouter(Total)