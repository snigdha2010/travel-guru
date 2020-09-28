import React from 'react';
import logo from '../../resources/Logo.png';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
   
    return (
        <div  className = 'header'>
             <Navbar   variant="dark">
    <Navbar.Brand href="#home"><img className='w-50'  src={logo} alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Login</Button>
    </Form>
  </Navbar>
        </div>
    );
};

export default Header;