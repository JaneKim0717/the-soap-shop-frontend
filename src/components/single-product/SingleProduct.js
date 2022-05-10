import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import { CartContext }from '../../context/CartContext'
import { isInCart } from '../../Helpers'
import Layout from '../shared/Layout'
import styled from "styled-components";
import './SingleProduct.styles.scss'

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #f5f5f4;
    color:black;
    cursor: pointer;
    font-weight: 600;
    display: block;
    width: 100%;
    line-height: 1.4;
    padding-left: 5px;
    padding-right: 5px;
    white-space: normal;
    margin-top: 0;
    margin-bottom: 10px;
    min-height: 44px;
`;

function SingleProduct({setUser, match, history: { push } }) {

  const { products } = useContext(ProductsContext)
  const { addProduct, cartItems, increase } = useContext(CartContext)
  const { id } = match.params
  
  const [product, setProduct] = useState(null)

  // const [review, setReview] = useState("")
  // const [reviewArray, setReviewArray] = useState([])


//   useEffect(() => {
//     fetch('http://localhost:3000/reviews')
//     .then(response => response.json())
//     .then(comments => setReviewArray(comments))
// }, [])

  
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));
    if (!product) {
      return push('/shop')
    }
    setProduct(product)
  }, [id, product, push, products]);
  
  if (!product) {return null}


  
  const { image, name, price, description, ingredients } = product
  const itemInCart = isInCart(product, cartItems)

  // function handleReviewSubmit() {
	// 	fetch("/reviews", {
	// 		method: "post",
	// 		headers: {
	// 			"content-type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			user_id: user_id,
	// 			product_id: product.id,
	// 			review_body: review,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setReview("")
	// 			setReviews(reviews.map((x) => [...x, data]))
	// 		})
	// }

  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img className='single-product-img' src={image} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h1>{name}</h1>
            <h2>${price}.00</h2>
          </div>
          <div className='add-to-cart-btns'>
            {
              !itemInCart &&             
              <Button  
              onClick={() => addProduct(product)}>
                ADD TO CART
              </Button>
            }
            {
              itemInCart &&             
              <Button  
              onClick={() => increase(product)}>
                ADD MORE
              </Button>
            }
            <Button>
              PROCEED TO CHECKOUT
            </Button>
          </div>
          <div className='product-description'>
            <p>DESCRIPTION: {description}</p>
            <p>INGREDIENTS: {ingredients}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withRouter(SingleProduct)