import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import { Badge } from 'react-bootstrap';

class ProfileItem extends Component {
  render() {
      const {profile,uid} =this.props;
      console.log(profile.skills)
      if(profile.skills){      
      let skil=profile.skills.split(',');
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
        <div className="col-2">
        <img src={`https://robohash.org/${profile.fullName}`} alt="" className="rounded-circle"/>
        </div>
        <div className="col-lg-6 col-md-4 col-8">
        <h3>{profile.fullName}</h3>
        <p>
        {profile.year} year at {profile.institution};
        </p>
        <p>
        {profile.location}
        </p>
       <Link to={"/profile/"+uid} className="btn btn-info">
        View Profile
       </Link>   
        </div>
        <div className="col-md-4 d-none d-md-block">
        <h4>Skill Set</h4>
        <ul className="list-group">
        {
      //     skil.slice(0,4).map((skill,index)=>
      //      ( <li key={index} className="list-group-item">
      //       <i className="fa fa-check pr-1" />
      //       {skill}
      //       </li>)
      //  )
       skil.slice(0,4).map((skill,index)=>
           (<Badge key={index} variant="info" className="mv1">
            {skill}
            </Badge>
            )
       )
      }
        </ul>
        
        </div>
        </div>
      </div>
    )
  }else{
    return null
  }
}
}

ProfileItem.propTypes={
    profile:PropTypes.object.isRequired
}
export default ProfileItem;