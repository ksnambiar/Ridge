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
          <div className="panel br2 bg-light-green jumbotron center ma3" style={{textAlign:"center",color:"white"}}>
          <div className="pa3 tc">
          <h3 className="br1 h3 w3 dib bg-light-gray">1</h3>
          </div>
          <h3> {project.name}</h3>
          <Button
          type="info"
          >
          ###
          </Button>
          <Button
          type="warning"
          >
          ###
          </Button>
         </div>
        </div>
      </div>
    )
  }
}
export default ProjectHeader;