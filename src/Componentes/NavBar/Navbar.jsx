import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import ComponenteIcono from '../ComponenteIcono';


const Navbarmain = () => {

    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" className="titulo">AMBROSÍA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#informacion">Información</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Button variant="dark"><ComponenteIcono/><span>0</span></Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarmain