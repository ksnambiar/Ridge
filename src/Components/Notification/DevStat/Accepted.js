import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {Link} from "react-router-dom"
export default class Accepted extends Component {
    render() {
        const profile=this.props.profile;
        let view;
        if(profile.join_request){
          const keys=Object.keys(profile.join_request)
          let college=profile.institution
          view=keys.map((obj,i)=>{
            let data=profile.join_request[obj]
            if(data.status==="resolved"){
            return <Card key={i}>
            <Card.Body>
            <div className="row">
            Project:<Link to={`/projects/${profile.institution}/${data.projectName}`} className="f5">{data.projectName}</Link>
            <Link to={`/profile/${data.projectAdmin}`} className="ml5 btn btn-dark">View Admin Profile</Link>
            </div>
            </Card.Body>
            </Card>
            }
            else{
              return null
            }
          })
        }else{
          view=<Card>
          <Card.Body>
          <p>No requests yet</p>
          </Card.Body>
          </Card>     
        }
        return (
          <div>
           {view}
          </div>
        )
  }
}
