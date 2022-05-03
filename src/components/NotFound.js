import React from 'react'
import Layout from './shared/Layout'

function NotFound() {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  }

  return (
    <Layout>
      <p style={style}>Oops! Page Not Found</p>
    </Layout>
  )
}

export default NotFound