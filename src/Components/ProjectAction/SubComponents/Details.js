import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import ProjectTeam from "../../Project/ProjectTeam"
import ProjectGuide from "../../Project/ProjectGuide"
export class Details extends Component {
  render() {
      const {project} =this.props
      let dom
      let view
      if(project){
        dom=project.domains.map((obj,i)=>(
          <div key={i} className="p-3">
          <i className="fa fa-check" /> {obj}
        </div>
        ))
        view=<div><Card>
        <Card.Body>
        <div className="row">
        <div className="col-md-6">
        <h5 className="ma2">{project.name}</h5>
        <h6 className="ma2">{project.description}</h6>
        <a href={project.githublink} target="_blank">Github Link</a>
        </div>
        <div className="col-md-3">
        <h5 className="ma2">Team</h5>
        <ProjectTeam project={project}/>
        </div>
        <div className="col-md-3">
        <h5 className="ma2">Guide</h5>
        <ProjectGuide project={project}/>
        </div>
        </div>
        </Card.Body>
      </Card>
      <Card className="mt2">
      <Card.Body>
      <div className="mt1">
      <h4 className="mv1">Project Domains</h4>
      </div>
      <div className="row">
      {dom}
      </div>
      </Card.Body>
      </Card>
      </div>
      }else{
          view=null
      }
    return (
        <div>
        {view}
      </div>
    )
  }
}

export default Details
