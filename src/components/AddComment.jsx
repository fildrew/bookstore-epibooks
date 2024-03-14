import { Component } from "react";
import { Button, Form } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";


const initialComment = {
    
        comment: "",
        rate: "",
        elementId: "",
}

class AddComment extends Component {
    state = {
        comments: initialComment,
    }
    handleSubmit = async(event) => {
        event.preventDefault();

        fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(this.state.comments),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        .then((res) => {
            console.log('RES', res)
            if (res.ok) {
                window.alert('Thanks For Your Comment!')
                this.setState({
                    comments: initialComment, // riassegno reservation al valore iniziale
                })
            } else {
                window.alert('Sorry,Try Again!')
                throw new Error('Errore nel salvataggio della prenotazione')
            }
        })
        .catch((err) => {
            console.log('ERROR!', err)
        })
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
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
                    <Button variant="primary"
                        type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>

            </Form>
        );
    }
}

export default AddComment;