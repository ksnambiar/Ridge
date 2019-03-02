import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class ProjectHeader extends Component {
  compoe
  render() {
      const {project} = this.props;
      console.log(project)
    return (
      <div className="row">
        <div className="center col-md-10">
          <div className="panel br2 bg-light-blue jumbotron center ma3" style={{textAlign:"center",color:"white"}}>
          <h3> {project.name}</h3>
          <h5>{project.description}</h5>
          <button
          type="button"
          className="btn btn-primary"
          >
          Get in contact
          </button>
          <button
          type="button"
          className='btn btn-warning'
          >
          Request to join
          </button>
         </div>
        </div>
      </div>
    )
  }
}
export default ProjectHeader;