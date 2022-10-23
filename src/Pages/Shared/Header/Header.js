import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
    }


    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fw-bold' href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="light">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button variant="light">Login</Button></Link>
                                        <Link to='/register'><Button variant="light">Register</Button></Link>
                                    </>

                            }
                        </Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                            }

                        </Nav.Link>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;