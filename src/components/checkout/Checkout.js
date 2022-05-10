import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Layout from "../shared/Layout";
import styled from "styled-components";
import StripeCheckout from "./stripe-checkout/StripeCheckout";
import './Checkout.styles.scss';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6387877/pexels-photo-6387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: rgba(0,0,0,0.2);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: bold;
  margin-bottom: 4rem;
  color:white;
  font-family: Montserrat;
`;

const CheckoutSummayText = styled.h3`
  font-size: 1.5em;
  color:white;
  // letter-spacing: 2px;
`;

const CheckoutSummaryPrice = styled.h2`
  font-size: 1.5em;
  color:white;
  // letter-spacing: 2px;
`;

function Checkout() {
  const { itemCount, total } = useContext(CartContext);

  return (

    <Layout>
      <Container>
        <Wrapper>

            <Title> CHECKOUT SUMMARY </Title>
            <CheckoutSummayText>{`TOTAL ITEMS: ${itemCount}`}</CheckoutSummayText>
            <CheckoutSummaryPrice>{`TOTAL AMOUNT: $${total}.00`}</CheckoutSummaryPrice>
            <StripeCheckout />

        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Checkout