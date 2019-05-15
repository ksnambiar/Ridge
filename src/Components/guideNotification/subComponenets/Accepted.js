import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
class Accepted extends Component {
  render() {
      const {profile} = this.props;
      let view
      if(profile.guide_request){
      view = Object.keys(profile.guide_request).map((obj,i)=>{
          let data = profile.guide_request[obj];
          return data.status==="resolved"?<Card key={i}>
          <Card.Body>
          <Link to={`/projects/${profile.institution}/${data.projectName}`}>{data.projectName}</Link>
          <p>You are mentoring {data.projectName}</p>
          </Card.Body>
          </Card>:null
      })
      if(view.length===0){
          view=<Card><Card.Body>No accepted requests</Card.Body></Card>
      }
    }
      else{
        view=<Card><Card.Body>No Requests Yet</Card.Body></Card>
      }
    return (
      <div>
        {view}
      </div>
    )
  }
}

export default Accepted;