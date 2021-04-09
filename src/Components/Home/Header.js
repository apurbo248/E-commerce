import React, { useContext } from 'react';
import {Link}from "react-router-dom";
import {Navbar, Nav, Form, FormControl,Button} from 'react-bootstrap'
import { userContext } from '../../App';
const Header = () => {
    const [loggedInUser,setLoggedInUser] =useContext(userContext);
    return (
        <div className="">
            <Navbar bg="" expand="lg" className="container shadow mb-5" >
            <Navbar.Brand ><Link to="/Home">TshirtZone</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/Order">Order</Link></Nav.Link>
                <Nav.Link><Link to="/Admin">Admin</Link></Nav.Link>
                </Nav>
                <Form inline>
                {
                loggedInUser?.isSignedIn ? 
                <strong style={{color:'green',fontSize:'13px'}}>{loggedInUser.name}</strong>
              : <Link className="btn btn-success " to="/login"> Log in</Link>
            }
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;