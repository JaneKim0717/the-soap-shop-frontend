import React from 'react'
import { withRouter } from 'react-router-dom'
import aghaSoaps from '../../assets/making-soaps.jpg';
import './MainSection.styles.scss'

function MainSection({ history }) {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={aghaSoaps} alt='bath bomb' />
        </div>
        <div className='ms-m-description'>
          <h1 className='welcome-main-section'>
            WELCOME TO THE SOAP SHOP
          </h1>
          <br/>
          <h3 className='welcome-titles'>  S I M P L E  </h3>
          <p>
              We believe that keeping our ingredients simple is the most effective way to reduce unwanted irritation from a product. We always choose safe, effective and high-quality ingredients suitable for each formula to bring you the best result.
          </p>
          <br/>
          <h3 className='welcome-titles'>  N A T U R A L  </h3>
          <p>
            We believe in the healing powers of natural botanicals. We always incorporate effective and high-quality natural ingredients into our products.
          </p>
          <br/>
          <h3 className='welcome-titles'>  E A R T H - C E N T E R E D  </h3>
          <p>
            We believe it's imperative to minimize our impact on the environment. We are committed to reducing plastic waste and protecting the Earth at every part of our business, from production and shipping to our end products.
          </p>
          <br/>
          <br/>
          <div className='ms-shop-all-bttn'>
            <button className='button is-black' id='shop-now' onClick={()=> history.push('/shop')} >
              SHOP ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MainSection);