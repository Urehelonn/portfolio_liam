import {BottomNavigation, BottomNavigationAction} from "@mui/material";

import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeIcon from '@mui/icons-material/Home';
import {useRouter} from "next/router";

const MainHeader = () => {
    const router = useRouter();
    return (
        <BottomNavigation
            showLabels
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon/>}
                                    onClick={() => {
                                        router.push('/').then();
                                    }}/>
            <BottomNavigationAction label="Projects" icon={<AccountTreeIcon/>}
                                    onClick={() => {
                                        router.push('/project').then();
                                    }}/>
            <BottomNavigationAction label="About" icon={<InfoIcon/>}
                                    onClick={() => {
                                        router.push('/about').then(() => {
                                            console.log('aefasdf')
                                        });
                                    }}/>
            <BottomNavigationAction label="Contact" icon={<ContactPageIcon/>}
                                    onClick={() => {
                                        router.push('/contact').then();
                                    }}/>
        </BottomNavigation>

        // <Navbar bg="dark" expand="md" variant="dark" sticky="top">
        //     <Navbar.Brand>
        //         <Link to={'/'}>Liam's Work Space</Link>
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        //         <Nav className="ml-auto">
        //             <Nav.Item>
        //                 <Nav.Link as={Link} to="/" eventKey={1} title="main">
        //                     Main Page
        //                  </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item>
        //                 <Nav.Link as={Link} to="/about" eventKey={2} title="about">
        //                     About
        //                  </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item>
        //                 <Nav.Link as={Link} to="/contact" eventKey={3} title="contact">
        //                     Contact
        //                  </Nav.Link>
        //             </Nav.Item>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
}

export default MainHeader;