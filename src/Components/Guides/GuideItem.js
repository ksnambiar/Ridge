import React, { Component } from 'react'
import {Card,Badge} from "react-bootstrap"
import {Link} from "react-router-dom"
export class GuideItem extends Component {
  render() {
      const {profile,gid}=this.props
      let aoi=profile.aoi.split(",")
      let projlen=profile.projects?Object.keys(profile.projects).length:0
      let mprojlen=profile.mprojects?Object.keys(profile.mprojects).length:0
    return (
      <div>
        <Card className="mv1">
        <Card.Body className="row">
        <div className="col-md-2">
        <img src={`https://robohash.org/${profile.fullName}`} alt="" className="rounded-circle"/>

        </div>
        <div className="col-md-6 center">
        <h3>{profile.fullName}</h3>
        <p>
        working in {profile.institution}
        </p>
        <p>
        {profile.location}
        </p>
        <Badge variant="success" className="ma1">Projects : {projlen}</Badge>
        <Badge variant="success" className="ma1">Mentoring Projects : {mprojlen}</Badge>
        <Link to={`/guide-profile/${gid}`} className="btn btn-info mh3">Explore Profile</Link>
        </div>
        <div className="col-md-4">
        <h4>Area of Interests</h4>
        <ul className="list-group">
        {aoi.slice(0,4).map((interest,index)=>
           ( <Badge className="mv1" variant="info" key={index} >
            
            {interest}
            </Badge>)
       )}
        </ul>
        </div>
        </Card.Body>
        </Card>
      </div>
    )
  }
}

export default GuideItem
