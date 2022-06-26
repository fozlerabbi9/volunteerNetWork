import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#home" >Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="addevent" href="#deets">addevent</Nav.Link>
                            <Nav.Link as={Link} to="registerVolunterr" href="#deets">Register-Volunterr</Nav.Link>
                            <Nav.Link as={Link} to="login" href="#deets">login</Nav.Link>
                            <Nav.Link as={Link} to="register" href="#deets">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}

export default Header;