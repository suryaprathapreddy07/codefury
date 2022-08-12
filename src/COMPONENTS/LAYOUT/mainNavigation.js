import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from'./mainNavigation.module.css'
import { VscMenu } from "react-icons/vsc";
import { FaBitcoin } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.flex}>
      <Container fluid className={classes.flex}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className={classes.endNavigations}>
          <Nav >
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
             <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>

    </Navbar>
  );
}

export default NavigationBar;