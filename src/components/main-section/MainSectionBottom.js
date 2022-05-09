import React from 'react'
import './MainSectionBottom.styles.scss'

function MainSectionBottom() {
  return (
    <>
      <div className='main-section-bottom-right'>
        <img className='gift-image' src='https://i.imgur.com/H4JovUZ.png' alt='welcome'/>
        <div className='ms-m-description-right'>
          <h2 className='welcome-titles'>WELCOME TO THE SOAP SHOP</h2>
          <p className='ms-message'>
            Our products are handmade in small batches with natural and fresh ingredients. All of our products are beautifully wrapped and we strive to bring you joyful experiences and effective results by incorporating our products into your self-care routine.
          </p>
          <a href="http://localhost:4000/about">READ OUR STORY</a>
        </div>
      </div>

      <div className='main-section-bottom-left'>
        <img className='soap-image' src='https://i.imgur.com/WmmU3XJ.png' alt='welcome'/>
        <div className='ms-m-description-left'>
          <h2 className='welcome-titles'>FEEL YOUR BEST</h2>
          <p className='ms-message'>
            At The Soap Shop, each product is thoughtfully formulated and handmade with the utmost sincerity. We hope that our products transform your self-care routine.
          </p>
          <a href="http://localhost:4000/shop">SHOP OUR PRODUCTS</a>
        </div>
      </div>

    </>
  )
}

export default MainSectionBottom