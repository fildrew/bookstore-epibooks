
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNav = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="primary">
      <Container >
          <Navbar.Brand href="#home">Copperfield & Twist -{props.subtitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#admin">About</Nav.Link>
              <Nav.Link href="#contacts">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav;