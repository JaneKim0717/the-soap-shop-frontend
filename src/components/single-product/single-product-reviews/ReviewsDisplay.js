import React, {useState} from 'react'

function ReviewsDisplay({ review, handleAddComment, handleDelete, handleChangeEditComment, id, onSubmitEditComment, commentValue, setCommentValue, handleDeleteBtn, setEditBack, handleEditedChange, handleClickEditBtn, user }) {
  
  const timestamp = new Date(review.created_at).toLocaleDateString()


  const [commentEditBool, setCommentEditBool] = useState(false)


  function handleClickEditState(e) {
    setCommentEditBool(!commentEditBool)
  }


  return (
		<>
      <div>
        <h4>{user.username}</h4>
        <span>{timestamp}</span>
        { commentEditBool ?  <input value={commentValue} onChange={handleEditedChange} /> : <p>{review.review_body}</p> }
      </div>

      <button className='edit-bttn' onClick={(e) => {
          handleClickEditState(e);
          handleClickEditBtn(e);
        }}>
        EDIT
      </button>
      
      {commentEditBool && 
      <button
        id={id}
        className='save-button'
        onClick={(e) => {
          onSubmitEditComment(e);
          handleClickEditState(e);
        }} 
      > 
        SAVE
      </button>}

      {commentEditBool && 
      <button
        id={id}
        className='delete-bttn' 
          onClick={(e) => {
            handleDeleteBtn(e);
            handleClickEditState(e);
          }}>
        DELETE
      </button>}

		</>
	)
}

export default ReviewsDisplay