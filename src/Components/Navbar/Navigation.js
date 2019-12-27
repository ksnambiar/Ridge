import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown,Dropdown,DropdownButton } from "react-bootstrap";
import {SplitButton} from "react-bootstrap";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom"
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
 linkSelected(url){
   this.props.history.push(url)
 }
  render() {
    const {isAuthenticated,user,utype} = this.props.auth;
    const {profile,guideProfile} = this.props.profile;
    let uid = localStorage.getItem('uid')
    const authLinks = (
      <Nav> 
     {
      //<Link to='/team' className="f6 fw6 db silver link dim hover-silver">Team</Link>
     }
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
     {profile?<Dropdown.Item eventKey="1" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,`/guides/${profile.institution}`)}> 
          Guides  
       </Dropdown.Item>:null
      }

      {profile?<Dropdown.Item eventKey="4" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,`/dev/projects/${profile.institution}`)}> 
      View Projects
   </Dropdown.Item>:null
  }

        <Dropdown.Item eventKey="2" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,'/developers')}>
        Developers
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,'/feeds')}>
        
        Post Feeds  
        
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
    <Dropdown.Item  eventKey="1" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/dev/add-project")}>
    Add Projects
    </Dropdown.Item>
    <Dropdown.Item  eventKey="2" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/dev/add-experience")}>
    Add Experience
    </Dropdown.Item>
    </DropdownButton>
     
    {
       //profile related
     }

      <SplitButton
      className="mh1"
      title={<Octicon className="f6 fw6 db white link dim hover-silver" icon={getIconByName("home")} size="small"/>}
      size="sm"
      onClick={this.linkSelected.bind(this,'/dev/dashboard')}
      variant="secondary"
      >
        
      <Dropdown.Item eventKey="1" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,`/profile/${uid}`)}>
        Your Profile
      </Dropdown.Item>
      <Dropdown.Item eventKey="2" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/dev/edit-profile")}>
      Edit Profile
      </Dropdown.Item>
      <Dropdown.Divider/>
      {
      // <Dropdown.Item eventKey="3" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/dev/settings")}>
      // Settings
      // </Dropdown.Item>
      }
      </SplitButton>
      <Link to="/dev/notifications" className="f6 fw6 db link dim hover-silver mh1 btn btn-secondary" title="Notifications"><Octicon icon={getIconByName("bell")} size="small" /></Link>
      <a href="#" onClick={this.onLogoutClick.bind(this)} className="f6 fw6 db silver link dim hover-silver mh1">Logout</a>         
    </Nav>
    </div>
    )
    const guideLinks = (<div>
      <Nav>
      <DropdownButton
      title="Explore"
      className="mh1"
      variant="secondary"
      size="sm"
      >
     {guideProfile?<Dropdown.Item eventKey="1" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,`/guides/${guideProfile.institution}`)}> 
          Guides  
       </Dropdown.Item>:null
      }

      {guideProfile?<Dropdown.Item eventKey="4" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,`/guide/projects/${guideProfile.institution}`)}> 
      View Projects
   </Dropdown.Item>:null
  }

        <Dropdown.Item eventKey="2" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,'/developers')}>
        Developers
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,'/feeds')}>
        
        Post Feeds  
        
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
    variant="secondary"
    className="mh1"
    size="sm"
    title={<Octicon icon={getIconByName("plus-small")}/>}
    >
    <Dropdown.Item  eventKey="1" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/guide/add-project")}>
    Add Projects
    </Dropdown.Item>
    <Dropdown.Item  eventKey="2" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/guide/add-experience")}>
    Add Experience
    </Dropdown.Item>
    <Dropdown.Item  eventKey="3" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/guide/add-education")}>
    Add Education
    </Dropdown.Item>
    </DropdownButton> 
    <SplitButton
      className="mh1"
      title={<Octicon className="f6 fw6 db white link dim hover-silver" icon={getIconByName("home")} size="small"/>}
      size="sm"
      onClick={this.linkSelected.bind(this,'/guide/dashboard')}
      variant="secondary"
      >
        
      <Dropdown.Item eventKey="1" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,`/guide-profile/${uid}`)}>
        Your Profile
      </Dropdown.Item>
      <Dropdown.Item eventKey="2" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/guide/edit-profile")}>
      Edit Profile
      </Dropdown.Item>
      <Dropdown.Divider/>
      {
      // <Dropdown.Item eventKey="3" className="f6 fw6 db silver link dim hover-silver" onClick={this.linkSelected.bind(this,"/guide/settings")}>
      // Settings
      // </Dropdown.Item>
      }</SplitButton>
      <Link to="/guide/notifications" className="f6 fw6 db link dim hover-silver mh1 btn btn-secondary" title="Notifications"><Octicon icon={getIconByName("bell")} size="small" /></Link>
      <a href="#" onClick={this.onLogoutClick.bind(this)} className="f6 fw6 db silver link dim hover-silver mh1">Logout</a>         
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

export default connect(mapStateToProps,{logoutUser,clearCurrentProfile})(withRouter(Navigation));
