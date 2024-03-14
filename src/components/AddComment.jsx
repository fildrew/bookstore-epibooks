import { Component } from "react";
import { Button, Form } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
    handleSubmit = async(event) => {
        event.preventDefault();
    };

    render() {
        return (
            <Form>
                    <Form.Select aria-label="Add Comment">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="comment">
                        <Form.Label>Add Comment</Form.Label>
                        <Form.Control as={"textarea"} rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    
            </Form>
        );
    }
}

export default AddComment;