import React from 'react'

function ReviewsDisplay({ review }) {
  const timestamp = new Date(review.created_at).toLocaleDateString()
	
  return (
		<>
      <div>
        <h4>{review.user}</h4>
        <span>{timestamp}</span>
        <p>{review.review_body}</p>
      </div>
		</>
	)
}

export default ReviewsDisplay