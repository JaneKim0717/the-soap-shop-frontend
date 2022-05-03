import React, { useContext } from 'react'
import Layout from '../shared/Layout'
import FeaturedProduct from '../shared/FeaturedProduct'
import { ProductsContext } from '../../context/ProductsContext'
import './Shop.styles.scss'

function Shop() {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <Layout>
      <div className="product-list-container">
        <h1 className="product-list-title">SHOP ALL PRODUCTS</h1>
        <div className="product-list">
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  )
}

export default Shop