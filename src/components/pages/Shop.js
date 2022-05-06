import React, { useContext, useState } from 'react'
import Layout from '../shared/Layout'
import FeaturedProduct from '../shared/FeaturedProduct'
import { ProductsContext } from '../../context/ProductsContext'
import SearchBar from '../SearchBar'
import './Shop.styles.scss'

function Shop() {
  const [search, setSearch] = useState("")
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <Layout>
      <SearchBar search={search} setSearch={setSearch} />
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