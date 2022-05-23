import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Row, Col, Nav} from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {

    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item className='navbar-item'>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className='navbar-item'>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav.Item>
        </Nav>

    )

}
