import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { TextSize } from '@githubprimer/octicons-react';
class ProjectOrigin extends Component {
  render() {
    const {project} = this.props
    let team=project.team
    let domains = project.domains
    let tview=team.map(obj=>{
      return <Card className="ml2 dim " style={{ width: '15rem',height: '16rem',float:"left"}}>
      <Card.Body className="center">
      <div className="row">
      <img src={`https://robohash.org/${obj.fullName}`} className="center br-100 ba h3 w3 dib" style={{ width: '11rem',height: '11rem' }} alt="profile pic" className="rounded-circle"/>
      </div>
      </Card.Body>
      <Card.Footer>
      <div className="row">
      <Link to={`/profile/${obj.uid}`} className="center"><h6>{obj.fullName}</h6></Link>
      </div>
      </Card.Footer>
      </Card>
    })
    return (
     <div className="row">
     <div className="col-xs-12">
     {tview}
     </div>
     </div>
    )
  }
}
export default ProjectOrigin;