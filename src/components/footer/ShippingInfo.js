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



function ShippingInfo() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Header>SHIPPING INFO</Header>
            <div className='main-section-container'>
              <div className='main-section-middle'>
                <div className='ms-m-description'>
                  <h2 className='welcome-titles'>PROCESSING TIME</h2>
                  <p className='ms-m-description'>
                    Please allow 1-3 business days us to pick, wrap and prepare your orders to ship. If you are placing a bulk order for a special event please contact us before placing your order. Bulk orders typically take 2-3 weeks to prepare depending on the size of the order.
                  </p>

                  <br />

                  <h2 className='welcome-titles'>SHIPPING TO USA</h2>
                    <p className='ms-m-description'>
                    You will receive an email with tracking information once your order is shipped. Orders take 2-10 business days and we offer FREE shipping on ALL orders. 
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

export default ShippingInfo