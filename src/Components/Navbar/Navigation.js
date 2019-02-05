import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
export default class Navigation extends Component {
  state = {
    isAuthenticated: "false"
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to='/' className="f4 fw6 db white link dim hover-white">Ridge</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Link to='/devs' className="f4 fw6 db silver link dim hover-silver">Developers</Link>
            {//<Nav.Link href="#pricing">Pricing</Nav.Link>
            // <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            //   <NavDropdown.Item href="#action/3.2">
            //     Another action
            //   </NavDropdown.Item>
            //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            //   <NavDropdown.Divider />
            //   <NavDropdown.Item href="#action/3.4">
            //     Separated link
            //   </NavDropdown.Item>
            // </NavDropdown>
    }
          </Nav>
          <Nav>
          
            <Link to='/register' className="f4 fw6 db silver link dim hover-silver">Register</Link>
           
            <Link to='/login' className="f4 fw6 db silver link dim hover-silver ml2">sign in</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
