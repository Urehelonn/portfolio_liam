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

    const [expanded, setExpanded] = useState(false);

    return (
        <Nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'
            variant="pills" activeKey={activeKey} onSelect={handleSelect}>
            <Navbar.Brand className='navbar-brand'>
                <Link to={'/'}>Liam's Work Space</Link>
            </Navbar.Brand>

            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}
                aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav onClick={handleSelect}>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" eventKey={1} title="Item">
                            Main Page
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/about" eventKey={2} title="Item">
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/contact" eventKey={3} title="Item">
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Nav>
    );
}

export default Header;