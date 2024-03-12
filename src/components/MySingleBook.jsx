import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

class MySingleBook extends Component {
    state = {
        selected: false,
    };

    render() {
        const { book } = this.props;
        const cardClassName = ` mt-3 me-5 ms-5 mb-4 ${this.state.selected ? "greenCardBorder" : ""}`;

        return (
        <Card
            style={{ cursor: "pointer"}}
            className={cardClassName}
            onClick={() => {
            this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
            }}
        >
            <Card.Img variant="top" src={book.img} style={{ objectFit: "cover", height: "200px"}} />
            <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
                <Badge bg="danger" className="me-2">
                € {book.price}
                </Badge>
                <Badge bg="info" className="me-2">{book.category}</Badge>
            </Card.Text>
            </Card.Body>
        </Card>
        );
    }
}

export default MySingleBook;