import React, {useEffect} from 'react'
import ReviewsDisplay from './ReviewsDisplay'

function Reviews({ productId, setReviews, reviews, handleAddReview, handleDelete, handleClickEditBtn, handleChangeEditComment, onSubmitEditComment, commentEditBool, setCommentEditBool, commentValue, setCommentValue, handleDeleteBtn, setEditBack, handleEditedChange, user }) {
  
  useEffect(() => {
    fetch(`http://localhost:3000/reviews_by_product/${productId}`)
      .then((res) => res.json())
      .then((data) => setReviews(() => [...reviews, data]))
  },[])



  console.log(reviews)
  const review_list = reviews?.map((x) =>
    x?.map((review) => <ReviewsDisplay 
      user={user}
      review={review}
      id = {review.id}
      handleAddReview={handleAddReview}
      handleDelete={handleDelete}
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
    />)
)

  return (
    <div>
      {reviews ? review_list : null}
    </div>
  )

}

export default Reviews