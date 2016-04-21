import React from 'react';
import { Nav, Navbar,NavDropdown,Image,MenuItem, Grid,Row,Capability,Col,Thumbnail,NavItem, ButtonToolbar, Button } from 'react-bootstrap';

// define and export our Layout component
export const navBar = (
  <Navbar inverse className ="navbar">
    <Navbar.Header>
      <Navbar.Brand>
        <a id="titre" href="#">TwilioIhealth</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>

        <NavDropdown eventKey={3} title="Choix" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/">Céer un ticket</MenuItem>
          <MenuItem eventKey={3.2} href="/dashboard" >Dashboard</MenuItem>
          <MenuItem eventKey={3.3} href="#" >Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>contactez moi</MenuItem>
        </NavDropdown>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
);
