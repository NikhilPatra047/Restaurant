import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavbarComponent() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#" style={{color: "white", textDecoration: "None"}}>Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color: "white", textDecoration: "None"}}>Home</Nav.Link>
                        <Nav.Link href="link" style={{color: "white", textDecoration: "None"}}>Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color: "white", textDecoration: "None"}}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;