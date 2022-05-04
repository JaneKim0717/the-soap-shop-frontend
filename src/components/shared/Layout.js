import React from 'react'
import Footer from '../footer/Footer'


function Layout({ children }) {

  return (
    <>
      <main>
        {
          children
        }
      </main>
      <Footer />
    </>
  )
}

export default Layout