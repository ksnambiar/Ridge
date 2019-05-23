import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { TextSize } from '@githubprimer/octicons-react';
class ProjectOrigin extends Component {
  render() {
    const {project} = this.props
    let team=project.team
    let domains = project.domains
    // lightbutton
    let tview=team.map((obj,i)=>{
      return <Link to={`/profile/${obj.uid}`} key={i}><li className="list-group-item dim">
     <h6  className="center">{obj.fullName}</h6>
      </li></Link>
      
      // <Card key={i} className="ml2 dim " style={{ width: '15rem'}}>
      // <Card.Body className="center">
      // <div className="row">
      // <Link to={`/profile/${obj.uid}`} className="center"><h6>{obj.fullName}</h6></Link>
      // </div>
      // </Card.Body>
      // </Card>
    })
    return (
     <div className="row">
     <div className="col-xs-12">
     {
    //  <Card className="projecthead">
    //    <Card.Body>
     }
       {tview}
       {
    //    </Card.Body>
    //  </Card>
       }
     </div>
     </div>
    )
  }
}
export default ProjectOrigin;