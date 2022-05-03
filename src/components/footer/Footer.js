import React from 'react'
import './Footer.styles.scss'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      {year} © THE SOAP SHOP BY JANE 
    </div>
  )
}

export default Footer;