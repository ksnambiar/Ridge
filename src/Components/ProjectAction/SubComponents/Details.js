import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import ProjectTeam from "../../Project/ProjectTeam"
import ProjectGuide from "../../Project/ProjectGuide"
export class Details extends Component {
  render() {
      const {project} =this.props
      let view
      if(project){
        view=<Card>
        <Card.Body>
        <h5 className="ma2">{project.name}</h5>
        <h6 className="ma2">{project.description}</h6>
        <h5 className="ma2">team</h5>
        <ProjectTeam project={project}/>
        <h5 className="ma2">Guide</h5>
        <ProjectGuide project={project}/>
        </Card.Body>
      </Card>
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
