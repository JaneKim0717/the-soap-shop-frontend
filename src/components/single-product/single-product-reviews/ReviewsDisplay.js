import React, {useState} from 'react'

function ReviewsDisplay({ review, handleAddComment, handleDelete, handleChangeEditComment, id, onSubmitEditComment, commentValue, setCommentValue, handleDeleteBtn, setEditBack, handleEditedChange, handleClickEditBtn, user  }) {
  const timestamp = new Date(review.created_at).toLocaleDateString()


  const [commentEditBool, setCommentEditBool] = useState(false)
  // const [commentValue, setCommentValue] = useState("")

  function handleClickEditState(e) {
    setCommentEditBool(!commentEditBool)
}

// function handleDeleteBtn() {
//     fetch(`http://localhost:3000/reviews/${id}` , {
//         method: 'DELETE',
//     })
//     handleDelete(id)
// };

// function setEditBack(e) {
//     e.preventDefault()
//     setCommentEditBool(false);
// }

// function handleClickEditBtn(e) {
//   // const clickedCommentText = e.target.parentElement.parentElement.firstChild.innerText;
//   setCommentValue(e.target.previousSibling.children[2].innerText)
//   setCommentEditBool(true)
//   // setReview(clickedCommentText)
// }

// function handleEditedChange(e) {
//   setCommentValue(e.target.value)
// }

console.log('Review User', user)

  return (
		<>
      <div>
        <h4>{user.username}</h4>
        <span>{timestamp}</span>
        {commentEditBool ?  <input value={commentValue} onChange={handleEditedChange} /> :<p>{review.review_body}</p>}
      </div>



      {/* {commentEditBool ? <input defaultValue={review.comments} onChange={handleChangeEditComment}></input> : 
        <div>{review.comments}</div>} */}

            {/* <form className='edit-form' id={id} onSubmit={(e) => {
                onSubmitEditComment(e)
                setEditBack(e)
            }}>
                <button className='delete-bttn' onClick={handleDeleteBtn}>DELETE</button>


                {commentEditBool && <button className='save-button'>Save</button>}
            </form> */}

            <button className='edit-bttn' onClick={(e) => {
                    handleClickEditState(e);
                    handleClickEditBtn(e);
                }}>EDIT</button>
                {commentEditBool && 
                <button 
                  onClick={(e) => {
                    onSubmitEditComment(e);
                    handleClickEditState(e);
                  }} 
                  
                  className='save-button' id={id}> 
                  Save
                </button>}

                {commentEditBool && <button
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