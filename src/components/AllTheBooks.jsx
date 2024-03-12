import Button from "react-bootstrap/Button";
import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";
import romanceBooks from "../books/romance.json";
import scifiBooks from "../books/scifi.json";
import Row from "react-bootstrap/esm/Row";
import MyAlert from "./MyAlert";
import MyBookList from "./MyBookList";
import Form from "react-bootstrap/Form";
/* import Col from "react-bootstrap/esm/Col";  */

// -----------CLASSE COMPONET
class AllTheBooks extends Component {
  // ---------IL SUO STATE ALL'INTERNO
    state = {
        books: null,
        library: {
        fantasy: fantasyBooks,
        romance: romanceBooks,
        scifi: scifiBooks,
        history: historyBooks,
        },

        selectedCat: "fantasy",
    };
  // --------------------------------

  // ---------RENDER
    render() {
        return (
        <Container className=" mt-3">
            <div className="mb-3">
            <Button
                className="me-2"
                variant="info"
                onClick={() => {
                this.setState({ selectedCat: "fantasy", books: fantasyBooks });
                }}
            >
                Fantasy
            </Button>
            <Button
                className="me-2"
                variant="warning"
                onClick={() => {
                this.setState({ selectedCat: "history", books: historyBooks });
                }}
            >
                History
            </Button>
            <Button
                className="me-2"
                variant="success"
                onClick={() => {
                this.setState({ selectedCat: "romance", books: romanceBooks });
                }}
            >
                Romance
            </Button>
            <Button
                className="me-2"
                variant="dark"
                onClick={() => {
                this.setState({ selectedCat: "scifi", books: scifiBooks });
                }}
            >
                Sci-fi
            </Button>
            </div>

            <Row sm={4} md={5} lg={6}>
            {this.state.books ? (
                <>
                <Form.Control
                    className="border border-1 border-info"
                    placeholder="Search by Title , Author or Genre..."
                    onChange={(event) => {
                    this.setState({
                        books: this.state.library[this.state.selectedCat].filter((book) =>
                        book.title.toLowerCase().includes(event.target.value.toLowerCase())
                        ),
                    });
                    }}
                />

                <MyBookList bookList={this.state.books} />
                </>
            ) : (
                <Container>
                <MyAlert color="danger" MyText="Premi un bottone per scegliere la categoria" />
                </Container>
            )}
            </Row>
        </Container>
        );
    }
}

export default AllTheBooks;
