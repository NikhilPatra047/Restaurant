import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavbarComponent() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#" style={{color: "white", textDecoration: "None"}}>Restaurant</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;