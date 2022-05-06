import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/layout"; 
import PaymentForm from "./PaymentForm";

function Checkout() {
  const { itemCount, total } = useContext(CartContext);

  return (
    <Layout>
      <div className="checkout">
        <h2> Checkout Summary </h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h3>{`Total Amount Due: $${total}.00`}</h3>
        {/* <StripeCheckout /> */}
        <PaymentForm />
      </div>
    </Layout>
  )
}

export default Checkout