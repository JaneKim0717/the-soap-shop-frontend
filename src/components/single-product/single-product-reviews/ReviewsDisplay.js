import React, {useState} from 'react'
import styled from "styled-components";


const ReviewDisplayContainer = styled.div`
  justify-content: center;
  margin-left: 490px;
  margin-bottom: 10px;
`;

const ReviewInput = styled.input`
  width: 500px;
  height: 100px;
`

const Button = styled.button`
  border:none;
  padding: 8px;
  margin-right: 15px;
  margin-top: 8px;
  background-color: #f4f4f5;
  color:black;
  cursor: pointer;
  font-weight: 100;
  font-size: 12px;
`;

function ReviewsDisplay({ review, handleAddComment, handleDelete, handleChangeEditComment, id, onSubmitEditComment, commentValue, setCommentValue, handleDeleteBtn, setEditBack, handleEditedChange, handleClickEditBtn, user }) {
  
  const timestamp = new Date(review.created_at).toLocaleDateString()


  const [commentEditBool, setCommentEditBool] = useState(false)


  function handleClickEditState(e) {
    setCommentEditBool(!commentEditBool)
  }


  return (
		<ReviewDisplayContainer>
      <div>
        <span>{timestamp}</span>
        <h4>{user.username}</h4>
        { commentEditBool ?  <ReviewInput value={commentValue} onChange={handleEditedChange} /> : <p>{review.review_body}</p> }
      </div>

      <Button className='edit-bttn' onClick={(e) => {
          handleClickEditState(e);
          handleClickEditBtn(e);
        }}>
        EDIT
      </Button>
      
      {commentEditBool && 
      <Button
        id={id}
        className='save-button'
        onClick={(e) => {
          onSubmitEditComment(e);
          handleClickEditState(e);
        }} 
      > 
        SAVE
      </Button>}

      {commentEditBool && 
      <Button
        id={id}
        className='delete-bttn' 
          onClick={(e) => {
            handleDeleteBtn(e);
            handleClickEditState(e);
          }}>
        DELETE
      </Button>}

		</ReviewDisplayContainer>
	)
}

export default ReviewsDisplay