import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authAction';
import {clearCurrentProfile} from '../../actions/profileAction';
class Navigation extends Component {
 onLogoutClick(e){
   e.preventDefault();
   this.props.clearCurrentProfile();
   this.props.logoutUser();
 }
  render() {
    const {isAuthenticated,user} = this.props.auth;
    const {profile} = this.props.profile;
    const authLinks = (
      <Nav>
          
      <Link to='/register' className="f4 fw6 db silver link dim hover-silver">Register</Link>
     
      <Link to='/login' className="f4 fw6 db silver link dim hover-silver ml2">sign in</Link>
     
     </Nav>
    )
    const userLinks = (
      <Nav>
      <Link to='/dashboard' className="f4 fw6 db silver link dim hover-silver">Dashboard</Link>    
      <Link to={`/profile/${user.fullName}`} className="f4 fw6 db silver link dim hover-silver ml3">Profile</Link>
     
      <a href="#" onClick={this.onLogoutClick.bind(this)} className="f4 fw6 db silver link dim hover-silver ml3">Logout</a>
     
    </Nav>
    )
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to='/' className="f4 fw6 db white link dim hover-white">Ridge</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Link to='/developers' className="f4 fw6 db silver link dim hover-silver">Developers</Link>
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
          {isAuthenticated?userLinks:authLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
Navigation.propTypes={
  logoutUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  auth:state.auth,
  profile:state.profile
})

export default connect(mapStateToProps,{logoutUser,clearCurrentProfile})(Navigation);