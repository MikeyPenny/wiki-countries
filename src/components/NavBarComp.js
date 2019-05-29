import React from 'react';
import './navBarComp.css';
import { Navbar } from 'react-bootstrap';

export default function NavBarComp() {
    
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand >WikiCountries</Navbar.Brand>    
        </Navbar>
    )

}

