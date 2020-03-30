import React, { useState } from 'react';
import { Router, Link, useHistory } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './header.style.scss';

const Header = (props) => {
    const [activeKey, setActiveKey] = useState('1');
    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
        // state.activeKey = eventKey;
        console.log(activeKey);
    };

    return (
        <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect} >
            <Navbar.Brand>
                {/* <img src="./../../images/logo.png" width="35px" height="30px" /> */}
                <Link to={'/'}>Liam's Work Space</Link>
            </Navbar.Brand>
            <Nav.Item>
                <Nav.Link as={Link} to="/about" eventKey={1} title="Item">
                    About
                    </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link eventKey={2} title="Item">
                    Contact
                </Nav.Link>
            </Nav.Item> */}
            {/* <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey={4.1}>Action</NavDropdown.Item>
                <NavDropdown.Item eventKey={4.2}>Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey={4.3}>Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
    );
}

export default Header;