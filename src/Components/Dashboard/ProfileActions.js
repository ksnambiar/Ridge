import React from 'react'
import {Link} from 'react-router-dom';

const ProfileActions=({institution})=> {
  
  return (
    <div className="btn-group mb-4" role="group">
    <Link to="/edit-profile" className="btn btn-light">
    <i className="fab fa-user-circle text-info mr-1"/>Edit Profile
    </Link>
    <Link to="/add-project" className="btn btn-light">
    <i className="fab fa-graduation-cap text-info mr-1"/>Add Projects
    </Link>
    <Link to="/add-experience" className="btn btn-light">
    <i className="fab fa-black-tie text-info mr-1"/>Add Experience
    </Link>
    <Link to={`/projects/${institution}`} className="btn btn-light">
    <i className="fab fa-black-tie text-info mr-1"/>View Projects
    </Link>
      
    </div>
  )
}
export default ProfileActions;