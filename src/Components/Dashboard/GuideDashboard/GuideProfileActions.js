import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class GuideProfileActions extends Component {
  render() {
      const {institution} = this.props
    return (
      <div>
    <div className="btn-group mb-4 " role="group">
    <Link to="/guide/edit-profile" className="btn btn-light">
    <i className="fab fa-user-circle text-info mr-1"/>Edit Profile
    </Link>
    <Link to={`/guide/projects/${institution}`} className="btn btn-light">
    <i className="fab fa-black-tie text-info mr-1"/>View Projects
    </Link>
    </div>
  
    {
    // <div className="btn-group mb-4 " role="group">
    // <Link to="/guide/add-project" className="btn btn-light">
    // <i className="fab fa-graduation-cap text-info mr-1"/>Add Projects
    // </Link>
    // <Link to="/guide/add-experience" className="btn btn-light">
    // <i className="fab fa-black-tie text-info mr-1"/>Add Experience
    // </Link>
    // <Link to="/guide/add-education" className="btn btn-light">
    // <i className="fab fa-black-tie text-info mr-1"/>Add Education
    // </Link>
    }
    </div>
      
    )
  }
}
