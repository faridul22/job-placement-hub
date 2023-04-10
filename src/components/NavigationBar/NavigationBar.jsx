import React from 'react';
import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const NavigationBar = () => {
    return (
        <Navbar className='py-5' bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='navbar-title'> <Link to='/'>JobPlacementHub</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link-container mx-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/appliedJobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </Nav>
                    <Button className='btn-style'>Star Applying</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;