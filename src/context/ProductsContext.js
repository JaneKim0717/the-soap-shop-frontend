import React, { createContext, useState, useEffect} from 'react';

export const ProductsContext = createContext(); 

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => setProducts(products))
}, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {
        children
      }
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider;