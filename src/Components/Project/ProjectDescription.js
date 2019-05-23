import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { TextSize } from '@githubprimer/octicons-react';
export class ProjectDescription extends Component {
  render() {
      const {project}=this.props;
      //projecthead projecttext 
    return (
      <div>
        <Card>
            <Card.Body className="roundedge">
                {project.description}
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ProjectDescription
