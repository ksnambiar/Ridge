import React, { Component } from 'react'
import {Card} from "react-bootstrap";
export class GuideAbout extends Component {
  render() {
      const {profile} =this.props;
      let view
      if(profile.aoi.split(",").length===0){
        view=<Card>
        <Card.Body>
        <h5>No Skills</h5> 
        </Card.Body>
        </Card>
      }else{
        view=profile.aoi.split(",").map(obj=>{
            return <li className="list-group-item dim">
            <div className="row">
            <h6  className="center">{obj}</h6>
            </div>
             </li>
        })
      }
      
    return (
      <div className="row">
        <div className="col-md-6">
        <h3 className="text-info">Bio</h3>
        <Card>
        <Card.Body>
        {profile.bio}
        </Card.Body>
        </Card>
        </div>
        <div className="col-md-6">
        <h3 className="text-info">Area of Interest</h3>
        {view}
        </div>
      </div>
    )
  }
}

export default GuideAbout
