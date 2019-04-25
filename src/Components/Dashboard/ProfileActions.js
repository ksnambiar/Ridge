import React from 'react'
import {Link} from 'react-router-dom';

const ProfileActions=({institution})=> {
  
  return (
    <div>
    <div className="btn-group mb-4 " role="group">
    <Link to="/dev/add-project" className="btn btn-light">
    <i className="fab fa-graduation-cap text-info mr-1"/>Add Projects
    </Link>
    <Link to="/dev/add-experience" className="btn btn-light">
    <i className="fab fa-black-tie text-info mr-1"/>Add Experience
    </Link>
    </div>
    </div>
  )
}
export default ProfileActions;