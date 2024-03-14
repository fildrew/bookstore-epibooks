import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge"; 
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";


class MySingleBook extends Component {
    state = {
        selected: false,
    };

    render() {
        const { book } = this.props;
        return (
            <Col xs={12} sm={6} md={4} xl={3} className="g-4" key={this.props.book.asin}>
                <Card 
                    className="h-100"
                    style={{ cursor: "pointer",textOverflow:"ellipsis"}}
                    >
                    <Card.Img
                        className="object-fit-contain img-fluid h-90"
                        variant="top"
                        src={this.props.book.img}
                        onClick={() => this.setState({ selected: !this.state.selected })}
                        style={{ border: this.state.selected ? "3px solid red" : "none" }}
                    />
                    <Card.Body>
                        <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
                        <Card.Text>
                            <Badge bg="danger" className="me-2">
                                <span>€{book.price}</span>
                            </Badge>
                            <Badge bg="info" className="me-2">
                                <span>€{book.category}</span>
                            </Badge>
                        </Card.Text>
                        <Button variant="dark" size="sm" className="p-1">
                            Buy Now
                        </Button>
                        {this.state.selected && <CommentArea bookId={this.props.book.asin} />}
                    </Card.Body>    
                </Card>
            </Col>
        );
    }
}

export default MySingleBook;