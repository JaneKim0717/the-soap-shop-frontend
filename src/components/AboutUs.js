import React from 'react'
import styled from 'styled-components'
import './AboutUs.styles.scss'
import Layout from './shared/Layout';


const Header = styled.h1`
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
  font-size: 2.5rem;
`;

function AboutUs() {
  return (

    <Layout>
      <div className='main-section-container'>
      <Header>OUR STORY</Header>
      <img className='ms-m-image' src='https://i.imgur.com/Rj7FA6s.png?1' alt='welcome'/>
        <div className='main-section-middle'>
          <div className='ms-m-description'>
            <h2 className='welcome-titles'>ABOUT US</h2>
            <p className='ms-m-description'>
              We are a small team of natural skincare & self-care enthusiasts - committed to bringing you the best quality products that you can confidently incorporate into your self-care routine.
            </p>
            <p className='ms-m-description'>
              As a small business, we dream big and are open to positive changes and growth! But our core values will stay uncompromised. We will always focus on creating simple, natural and earth-centred products with one belief in our hearts - you deserve to feel your best.
            </p>
            <br />
            <h2 className='welcome-titles'>SIMPLE</h2>
            <p className='ms-m-description'>
              We believe that keeping our ingredients simple is the most effective way to reduce unwanted irritation from a product. We always choose safe, effective and high-quality ingredients suitable for each formula to bring you the best result.
            </p>
            <br />
            <h2 className='welcome-titles'>NATURAL</h2>
            <p className='ms-m-description'>
              We believe in the healing powers of natural botanicals; we'll always incorporate effective and high-quality natural ingredients into our products.
            </p>
            <br />
            <h2 className='welcome-titles'>EARTH-CENTERED</h2>
            <p className='ms-m-description'>
              We believe it's imperative to minimize our impact on the environment. We are committed to reducing plastic waste and protecting Earth at every part of our business, from production and shipping to our end products.
            </p>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default AboutUs