import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { TextSize } from '@githubprimer/octicons-react';
export class ProjectDescription extends Component {
  render() {
      const {project}=this.props;
    return (
      <div>
        <Card>
            <Card.Body className="projecthead projecttext roundedge">
                {project.description}
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ProjectDescription
