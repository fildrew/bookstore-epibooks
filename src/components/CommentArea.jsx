import { Component} from "react";
import CommentList from "./CommentList"
import AddComment from "./AddComment"
const URL="https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
    state = {
      selectedId: this.props.bookId,
      comments: "",
    };
    async componentDidMount() {
        try {
            const response = await fetch(URL + this.state.selectedId, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmVkNDcxYWZhZjAwMTkxNTY2YmQiLCJpYXQiOjE3MTA0MjM3NjQsImV4cCI6MTcxMTYzMzM2NH0.wYrOn4UGijs2Kkm38CDuJv0OKDMJlGhajgtycOknyOk",
            },
            });
            const data = await response.json();
            this.setState({ comments: data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
            <CommentList comments={this.state.comments} />
            <AddComment comment={this.state.comments} />
            </div>
        );
    }
}

export default CommentArea;