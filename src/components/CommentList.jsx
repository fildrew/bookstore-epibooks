import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";


class CommentList extends Component {
    render () {
        return (
            <ListGroup>
                {this.props.comments &&
                    this.props.comments.map((comment) => (
                        <SingleComment
                            key={comment.id}
                            comment={comment}
                        />
                    ))}
            </ListGroup>     
        );
    }
}

export default CommentList;