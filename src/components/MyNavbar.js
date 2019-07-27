import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../style/myNavbar.sass';

 const MyNavbar = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Herolo Weather Task</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
                <div className='navItems'>
                <Link to="/Home">Home</Link>
                <Link to="/Favorites">Favorites</Link>
                </div>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )};
    export default MyNavbar;