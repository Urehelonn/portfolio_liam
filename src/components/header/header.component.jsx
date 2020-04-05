import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './header.style.scss';

const Header = () => {
    const [activeKey, setActiveKey] = useState(1);
    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
        console.log(activeKey);
    };

    return (
        <Navbar bg="dark" expand="md" variant="dark" sticky="top">
            <Navbar.Brand>
                <Link to={'/'}>Liam's Work Space</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" eventKey={1} title="main">
                            Main Page
                         </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/about" eventKey={2} title="about">
                            About
                         </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/contact" eventKey={3} title="contact">
                            Contact
                         </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;