import { Component } from "react";
import { Button, Form } from "react-bootstrap";


class AddComment extends Component {

    state = {
        comment : {
            comment:'',
            rate:'',
            elementId: this.props.asin,
        },
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        try {
            let response = await fetch (
                'https://striveschool-api.herokuapp.com/api/comments/',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comment),
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmVkNDcxYWZhZjAwMTkxNTY2YmQiLCJpYXQiOjE3MTA0MjM3NjQsImV4cCI6MTcxMTYzMzM2NH0.wYrOn4UGijs2Kkm38CDuJv0OKDMJlGhajgtycOknyOk",
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok) {
                alert('Review Complete!')
                this.setState({
                    comment: {
                        comment:'',
                        rate:'',
                        elementId: this.props.asin,
                    },
                })
            } else {
                throw new Error('Invalid response')
            }
        }  catch (error) {
            alert(error)
        }
    }   
    
    render() {
        return (
            <div className="my-3">
                <Form onSubmit={this.sendComment}>
                    <Form.Group className="mb-2">
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                        type="text"
                        rows={3}
                        placeholder="Enter Comment"
                        value={this.state.comment.comment}
                        onChange={(e) =>
                            this.setState({
                            comment: {
                                ...this.state.comment,
                                comment: e.target.value,
                            },
                            })
                        }
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                        as="select"
                        value={this.state.comment.rate}
                        onChange={(e) =>
                            this.setState({
                            comment: {
                                ...this.state.comment,
                                rate: e.target.value,
                            },
                            })
                        }
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddComment;