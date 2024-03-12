import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = (props) => {
    <footer className="bg-dark text-white position-sticky bottom-0 pt-2">
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <h4>Contact</h4>
                </Col>
                <Col>
                    <h4>About</h4>
                </Col>
                <Col>
                    <h4>Delivery Service</h4>
                </Col>
                <Col className="text-center">
                    <p>Copyright &copy; 2024</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default MyFooter;