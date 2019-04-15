import React, { Component } from 'react'

class ProjectOrigin extends Component {
  render() {
    const {project} = this.props
    let team=project.team
    let domains = project.domains
    return (
      <div className="row">
        <div className="col-md-10 center panel jumbotron bg-light-green">
        <div className="row">
        <div className="col-md-3">
          <h4>Team</h4>
          <ul className="list-group">
      {team.slice(0,4).map((tem,index)=>
         ( <li key={index} className="list-group-item">
          <i className="fa fa-check pr-1" />
          {tem.fullName}
          </li>)
     )}
     </ul>
        </div>
        <div className="col-md-6">
        <h4>Description</h4>
        <p>{project.description}</p>
        </div>
        <div className="col-md-3">
        <h4>Project Guide</h4>
        <h5>{project.guide}</h5>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
export default ProjectOrigin;