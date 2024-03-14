
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNav = (props) => {
  return (
    <Navbar 
      collapseOnSelect
      expand="lg" 
      className="bg-body-tertiary fixed-top"
      bg="dark" 
      data-bs-theme="dark"
    >
      <Container className="fs-4">
          <Navbar.Brand href="#home">Copperfield & Twist 
            -{props.subtitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href={props.homeLink} target='blank'>Home</Nav.Link>
                <Nav.Link href={props.aboutLink} target='blank'>About</Nav.Link>
                <Nav.Link href={props.browseLink} target='blank'>Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav;