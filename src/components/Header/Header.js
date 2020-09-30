import React, { useContext } from 'react';
import logo from '../../resources/Logo.png';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [logedIn, setLogedIn ] = useContext(UserContext);
   const handleSignOut = ()=> {
     setLogedIn([])
   }
   console.log(logedIn)
    return (
        <div  className = 'header '>
  <Navbar   variant="black">
    <Navbar.Brand href="/"><img className='w-50'  src={logo} alt=""/></Navbar.Brand>
    <Nav className="ml-auto">
      <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2" />
     
      <Nav.Link href="#home">News</Nav.Link>
      <Nav.Link href="#features">Destination</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
    </Nav>
    <Form inline>
      
     {
     logedIn.email ?
     <button   onClick={handleSignOut} variant="outline-info">LogOut</button> :
     <Link to = '/log-in'><button variant="outline-info">Login</button>
     </Link>  }
     
    </Form>
  </Navbar>
        </div>
    );
};

export default Header;