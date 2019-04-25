import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown,Dropdown,DropdownButton } from "react-bootstrap";
import {SplitButton} from "react-bootstrap";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authAction';
import {clearCurrentProfile} from '../../actions/profileAction';
import Octicon, { getIconByName } from "@githubprimer/octicons-react";
class Navigation extends Component {
 onLogoutClick(e){
   e.preventDefault();
   this.props.clearCurrentProfile();
   this.props.logoutUser();
 }
  render() {
    const {isAuthenticated,user,utype} = this.props.auth;
    const {profile} = this.props.profile;
    let uid = localStorage.getItem('uid')
    const authLinks = (
      <Nav> 
      <Link to='/team' className="f6 fw6 db silver link dim hover-silver">Team</Link>
  
      <Link to='/register' className="f6 fw6 db silver link dim hover-silver ml2">Register</Link>
     
      <Link to='/login' className="f6 fw6 db silver link dim hover-silver ml2">sign in</Link>
     
     </Nav>
    )
    const userLinks = (<div>
      
      <Nav>
      <DropdownButton
      title="Explore"
      className="mh1"
      variant="secondary"
      size="sm"
      >
     {profile?<Dropdown.Item eventKey="1"> 
          <Link to={`/guides/${profile.institution}`} className="f6 fw6 db silver link dim hover-silver">Guides</Link>
          
       </Dropdown.Item>:null
      }

      {profile?<Dropdown.Item eventKey="4"> 
      <Link to={`/dev/projects/${profile.institution}`} className="f6 fw6 db silver link dim hover-silver">
      View Projects
      </Link>
   </Dropdown.Item>:null
  }

        <Dropdown.Item eventKey="2">
        <Link to='/developers' className="f6 fw6 db silver link dim hover-silver">Developers</Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
        {
        <Link to='/feeds' className="f6 fw6 db silver link dim hover-silver">Post Feeds</Link>    
        }
        </Dropdown.Item>
      </DropdownButton>
    {
      //adding creds
    } 
    <DropdownButton
    variant="secondary"
    className="mh1"
    size="sm"
    title={<Octicon icon={getIconByName("plus-small")}/>}
    >
    <Dropdown.Item>
    Add projects
    </Dropdown.Item>
    <Dropdown.Item>
    Add Experience
    </Dropdown.Item>
    </DropdownButton>
     
    {
       //profile related
     }

      <SplitButton
      className="mh1"
      title={<Link to='/dev/dashboard' className="f6 fw6 db white link dim hover-silver"><Octicon icon={getIconByName("home")}/></Link>}
      size="sm"
      variant="secondary"
      >
        
      <Dropdown.Item eventKey="1">
      {
        <Link to={`/profile/${uid}`} className="f6 fw6 db silver link dim hover-silver">Your Profile</Link>
      }
      </Dropdown.Item>
      <Dropdown.Item eventKey="2">
      <Link to="/dev/edit-profile" className="f6 fw6 db silver link dim hover-silver">
      Edit Profile
    </Link>
      </Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item eventKey="3">
      <Link to="/dev/settings" className="f6 fw6 db silver link dim hover-silver">
      Settings
    </Link>
      </Dropdown.Item>
  
      </SplitButton>
      <Link to="/dev/notifications" className="f6 fw6 db link dim hover-silver mh1 btn btn-secondary" title="Notifications"><Octicon icon={getIconByName("bell")}/></Link>

      <a href="#" onClick={this.onLogoutClick.bind(this)} className="f6 fw6 db silver link dim hover-silver mh1">Logout</a>         
    </Nav>
    </div>
    )
    const guideLinks = (<div>
      <Nav>
      {
      <Link to='/feeds' className="f6 fw6 db silver link dim hover-silver">Post Feeds</Link>    
      } 
      <Link to='/guide/dashboard' className="f6 fw6 db silver link dim hover-silver ml3">Dashboard</Link>         
      <a href="#" onClick={this.onLogoutClick.bind(this)} className="f6 fw6 db silver link dim hover-silver ml3">Logout</a>
    </Nav>
    </div>
    )
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to='/' className="f4 fw6 db white link dim hover-white">TecRidge</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="mr-auto">
        {
          // <Link to='/developers' className="f4 fw6 db silver link dim hover-silver">Developers</Link>
        }
        </Nav>
    
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
          {isAuthenticated?utype==="dev"?userLinks:guideLinks:authLinks}
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