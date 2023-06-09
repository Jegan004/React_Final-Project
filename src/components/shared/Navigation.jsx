import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem,Image} from 'react-bootstrap';
import '../../Styles/navigation.css'



export default class Navigation extends Component{
    render(){
        return(
           <Navbar fixedTop default collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                <Link to="/"><Image className="logo"src="/assets/img/travel lo.png"/> </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    <b>Home</b>
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                    <b>About</b>
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/services" to="/services">
                    <b>Services</b>
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="/contact" to="/contact">
                    <b>Contact</b>
                    </NavItem>
                    </Nav>
           </Navbar.Collapse>
           </Navbar>
        )
    }
}