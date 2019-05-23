import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Badge} from "react-bootstrap";
class ProjectItem extends Component {
  render() {
    const {project} = this.props;
    let domains;
    if((typeof project.domains)==="string"){
      domains=project.domains.split(",");
    }else{
      domains=project.domains
    }
    
    return (
      <div>
      <div className="card card-body bg-light mb-3">
      <div className="row">
      <div className="col-2">
      <h6>{project.rank}</h6>
      </div>
      <div className="col-lg-6 col-md-4 col-8">
      <h3>{project.name}</h3>
      <p>
      {project.institution};
      </p>
      {
     <Link to={`/projects/${project.institution}/${project.name}`} className="btn btn-info">
       View Details
     </Link>
      }   
      </div>
      {
        // className="list-group-item"
      }
      <div className="col-md-4 d-none d-md-block">
      <h4>Domains used</h4>
      <ul className="list-group">
      {domains.slice(0,4).map((dom,index)=>
         ( <Badge variant="info" key={index} className="mt1">
          {dom}
          </Badge>)
     )}
      </ul>
      
      </div>
      </div>
    </div>
      </div>
    )
  }
}
export default ProjectItem;