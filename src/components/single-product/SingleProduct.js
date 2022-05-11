import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import { CartContext }from '../../context/CartContext'
import { isInCart } from '../../Helpers'
import Layout from '../shared/Layout'
import styled from "styled-components";
import './SingleProduct.styles.scss'
import Reviews from './single-product-reviews/Reviews'




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

  // function handleDelete(id) {
  //   const deletedComment = Reviews.filter((review) => review.id !== id)        
  //   setReviews(deletedComment);
  // };

  function handleClickEditBtn(e) {
    // const clickedCommentText = e.target.parentElement.parentElement.firstChild.innerText;
    console.log(e.target.previousSibling)
    setCommentValue(e.target.previousSibling.children[2].innerText)
    // setCommentEditBool(true)
    // setReview(clickedCommentText)
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
        console.log('Review in Map',reviewItem)
        console.log('Review in Map ID',reviewItem.id)
        console.log('Data in Map ID',data.id)
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

// function setEditBack(e) {
//   // const clickedCommentText = e.target.parentElement.parentElement.firstChild.innerText;
//   setCommentValue(e.target.previousSibling.children[2].innerText)
//   setCommentEditBool(true)
//   // setReview(clickedCommentText)
// }

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


      

    <div className='reviews-container'>
      {user !== null && (
        <form className='review-form' onSubmit={handleReviewSubmit}>
          <p>LEAVE A REVIEW</p>
          <input
            className='review-input'
            as="textarea"
            placeholder="Leave your Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Button variant="secondary">
            Submit
          </Button>
        </form>
			)}

      <Reviews
        user={user}
        productId={product.id}
        reviews={reviews}
        setReviews={setReviews}

        handleAddReview={handleAddReview}
        // handleDelete={handleDelete}
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
    </div>


      {/* {user !== null && (
        <Reviews
          productId={product.id}
          reviews={reviews}
          setReviews={setReviews}
        ></Reviews>
			)} */}

    </Layout>
  )
}

export default withRouter(SingleProduct)