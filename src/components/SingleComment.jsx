import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {

    render() {
        return (
            this.props && (
                <ListGroup.Item className = "bg-info">
                    <p>
                        Author:<strong>{this.props.comment.author}</strong>
                    </p>
                    <p>
                        Comment:<strong>{this.props.comment.comment}</strong>
                    </p>
                </ListGroup.Item>
            )
        );
    }
}
export default SingleComment;