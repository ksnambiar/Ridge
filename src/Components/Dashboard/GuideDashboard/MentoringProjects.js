import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
export class MentoringProjects extends Component {
  render() {
    const {profile} = this.props;
      let view;
      if(profile.mprojects){
        view = Object.keys(profile.mprojects).map((obj,i)=>{
            const data=profile.mprojects[obj]
            return <Card key={i} className="ma2" style={{ width: '18rem' }}>
            <Card.Body className="center">
            <h5 className="center">{data.name}</h5>
            <div className="row center">
            <Link className="btn btn-info rounded-circle mh1" to={`/project-status/${profile.institution}/${data.name}/${obj}`}  title="view weekly reports"><Octicon icon={getIconByName("report")}/></Link>
            </div>
            </Card.Body>
            </Card>
        })
      }else{
          view=<h5 className="center ma3">No Projects Yet</h5>
      }
    return (
      <div>
       <h3>Mentoring Projects</h3>
        <Card className="mv2">
        {view}
        </Card>
      </div>
    )
  }
}

export default MentoringProjects
