import React from 'react';
import logo from './logo.png'
import { Container,Nav, Navbar } from 'react-bootstrap';

import './Header.css'
import { Link } from 'react-router-dom';
const Header = (props) => {
    const className = `row d-flex justify-content-center ${props.headerClass}`;
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src={logo}
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                        EduHub
                    </Navbar.Brand>
                    <Nav className="mx-auto d-flex justify-content-end">
                        <Link to="/home" className="items">Home</Link>
                        <Link to="/courses" className="items">Courses</Link>
                        <Link to="/about" className="items">About</Link>
                        <Link to="/contact" className="items">Contact Us</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className={className}>
                {props.children}
            </div>
        </div>
    );
};

export default Header;