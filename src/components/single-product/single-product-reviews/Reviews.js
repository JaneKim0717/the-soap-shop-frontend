import React, {useEffect} from 'react'
import ReviewsDisplay from './ReviewsDisplay'

function Reviews({ productId, setReviews, reviews }) {
  
  useEffect(() => {
    fetch(`http://localhost:3000/reviews_by_product/${productId}`)
      .then((res) => res.json())
      .then((data) => setReviews(() => [...reviews, data]))
  },[])


  // const review_list = reviews.map((oneReview) => {
  //   return <ReviewsDisplay key={oneReview.id} oneReview={oneReview} />
  // })

  const review_list = reviews.map((x) =>
  x.map((review) => <ReviewsDisplay review={review} />)
)

  return (
    <div>
      {reviews ? review_list : null}
    </div>
  )

}

export default Reviews