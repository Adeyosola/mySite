import React from 'react';
import {render} from 'react-dom';
import { Navbar, NavbarHeader, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class AppBar extends React.Component{
  render(){
    return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">My Profession</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About Me</NavItem>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Undergrad</MenuItem>
            <MenuItem eventKey={3.2}>Postgrad</MenuItem>
            <MenuItem eventKey={3.3}>Work</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Miscellaneous</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    );
  }
}
