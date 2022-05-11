import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import { CartContext }from '../../context/CartContext'
import { isInCart } from '../../Helpers'
import Layout from '../shared/Layout'
import Reviews from './single-product-reviews/Reviews'
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

const ReviewButton = styled.button`
    border:none;
    padding: 10px;
    background-color: #f5f5f4;
    color:black;
    cursor: pointer;
    font-weight: 600;
    display: block;
    width: 507px;
    line-height: 1.4;
    padding-left: 5px;
    padding-right: 5px;
    white-space: normal;
    margin-top: 5px;
    margin-bottom: 10px;
    min-height: 44px;
    margin-left: 630px;
`;

const ReviewContainer = styled.div`
  margin-bottom: 80px;
`;

const ReviewTitle = styled.h3`
  text-align: left; 
  font-family: Montserrat;
  margin-left: 490px;
  margin-top: -40px;
`

const ReviewPar = styled.p`
  text-align: left; 
  font-family: Montserrat;
  margin-left: 635px;
  margin-top: -20px;
`

const ReviewForm = styled.div`
  font-family: Montserrat;
  margin-left: -700px;
`

const ReviewFormInput = styled.input`
  width: 500px;
  height: 100px;
  margin-right: 200px;
  margin-left: 300px;
`

const Hr = styled.hr`
  background-color: #afafaf;
  border: none;
  height: 1px;
  width: 1100px;
`;



function SingleProduct({ user, setUser, match, history: { push } }) {


  const { products } = useContext(ProductsContext)
  const { addProduct, cartItems, increase } = useContext(CartContext)
  const { id } = match.params
  
  const [product, setProduct] = useState(null)


  // <------>
  const [review, setReview] = useState("")
  const [reviews, setReviews] = useState([])

  const [commentEditBool, setCommentEditBool] = useState(false)
  const [commentValue, setCommentValue] = useState("")


  function handleReviewSubmit(e) {
    e.preventDefault()
		fetch("http://localhost:3000/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				user_id: user.id,
				product_id: product.id,
				review_body: review,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setReview("")
				setReviews(reviews.map((x) => [...x, data]))
			})
	}

  function handleAddReview (newReview) {
    setReviews([...reviews, newReview])
  }

  function handleClickEditBtn(e) {
    console.log(e.target.previousSibling)
    setCommentValue(e.target.previousSibling.children[2].innerText)
  }

  const handleChangeEditComment = (e) => {
    setReview(e.target.value);
  }

  function onSubmitEditComment(e) {
    console.log(e.target.id)
    console.log(commentValue)
    const id = e.target.id;
    fetch(`http://localhost:3000/reviews/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            review_body: commentValue, 
        }),
    })
    .then((r) => r.json())
    .then(data => {
      console.log(data)
      console.log(reviews[0])

      const updatedArray = reviews[0].map((reviewItem) => {
        if (reviewItem.id === data.id) {
          return data
        } else {
          return reviewItem
        }
      })
      console.log(updatedArray)
      setReviews([updatedArray]);
    })
  }


  function handleDeleteBtn(e) {
    console.log(e.target.id)
    const commentId = e.target.id
    fetch(`http://localhost:3000/reviews/${commentId}` , {
        method: 'DELETE',
    })
    const updatedArray = reviews[0].filter((reviewItem) => {
      return reviewItem.id !== parseInt(commentId)
    })

    console.log('This is Updated',updatedArray)
    setReviews([updatedArray]);
};

  function setEditBack(e) {
      e.preventDefault()
      setCommentEditBool(false);
  }

  function handleEditedChange(e) {
    setCommentValue(e.target.value)
  }

  // <------->
  
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



      <ReviewTitle>CUSTOMER REVIEWS</ReviewTitle>
      <Hr />
        <ReviewContainer>
          <ReviewForm>
            {user !== null && (
              <form className='review-form' onSubmit={handleReviewSubmit}>
                <ReviewPar>LEAVE A REVIEW</ReviewPar>
                <ReviewFormInput
                  className='review-input'
                  as="textarea"
                  placeholder=""
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <ReviewButton variant="secondary">
                  SUBMIT
                </ReviewButton>
              </form>
            )}
            </ReviewForm>

            {user !== null && (
              <Reviews
                user={user}
                productId={product.id}
                reviews={reviews}
                setReviews={setReviews}

                handleAddReview={handleAddReview}
                handleClickEditBtn={handleClickEditBtn}
                handleChangeEditComment={handleChangeEditComment}
                onSubmitEditComment={onSubmitEditComment}
                commentEditBool={commentEditBool}
                setCommentEditBool={setCommentEditBool}
                commentValue={commentValue}
                setCommentValue={setCommentValue}
                handleDeleteBtn={handleDeleteBtn}
                setEditBack={setEditBack}
                handleEditedChange={handleEditedChange}
              ></Reviews>
            )}

        </ReviewContainer>


    </Layout>
  )
}

export default withRouter(SingleProduct)