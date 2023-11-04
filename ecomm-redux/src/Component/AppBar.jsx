import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-danger'><span ><i className="bi bi-yelp"></i>Pizza Shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home"className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#menu"className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#must"className='fw-bold'>Must Try</Nav.Link>
            <Nav.Link href="#contact"className='fw-bold'>Contact-Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  </>
  )
}

export default AppBar