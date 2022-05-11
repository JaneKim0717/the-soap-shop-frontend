import React from 'react'
import Layout from '../shared/Layout'
import styled from 'styled-components'

const Header = styled.h1`
  margin-top: 10rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
  font-size: 2rem;
  font-family: Montserrat;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -300px
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  align-items: center;
`;

function RefundPolicy() {
  return (
    <Layout>
    <Container>
      <Wrapper>
        <Header>REFUND POLICY</Header>
          <div className='main-section-container'>
            <div className='main-section-middle'>
              <div className='ms-m-description'>
                <h2 className='welcome-titles'>RETURNS</h2>
                <p className='ms-m-description'>
                At The Soap Shop, all of our products are carefully inspected before they are shipped. Due to the nature of our products, used or opened products cannot be returned. You can return unused and unopened items for a refund of the purchase price within the following time frame: 14 days of receiving an order. The buyer is responsible for shipping costs on all return items. If we shipped the wrong product or your order is damaged in transit, please contact us within 7 days of receiving an order.
                </p>

                <br />

                <h2 className='welcome-titles'>WAYS TO RETURN</h2>
                  <p className='ms-m-description'>
                  To initiate a return, please email us at contact@thesoapshop.com with your order number and the item you are looking to return.
                  Once your return is received, we will send you an email to notify you that we have received your returned item. If you are approved, then your refund will be processed. A credit will automatically be applied to your credit card or original method of payment within 30 days.
                  </p>
                  
    

                <br />

              </div>
            </div>
          </div>
      </Wrapper>
    </Container>
  </Layout>
  )
}

export default RefundPolicy