
import { Button,ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
    const deleteComment = async (asin) => {
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            method: 'DELETE',
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmVkNDcxYWZhZjAwMTkxNTY2YmQiLCJpYXQiOjE3MTA0MjM3NjQsImV4cCI6MTcxMTYzMzM2NH0.wYrOn4UGijs2Kkm38CDuJv0OKDMJlGhajgtycOknyOk",
            },
          }
        )
        if (response.ok) {
          alert('La recensione è stata elimata!')
        } else {
          throw new Error('La recensione non è stata eliminata!')
        }
      } catch (error) {
        alert(error)
      }
    }
  
    return (
      <ListGroup.Item>
        {comment.comment}
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => deleteComment(comment._id)}
        >
          Delete
        </Button>
      </ListGroup.Item>
    )
  }
  
export default SingleComment;