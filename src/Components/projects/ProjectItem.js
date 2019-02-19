import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class ProjectItem extends Component {
  render() {
    const {project} = this.props;
    let doma = project.domains.split(",");
    let domains=doma;
    return (
      <div>
      <div className="card card-body bg-light mb-3">
      <div className="row">
      <div className="col-2">
      <h6>Ranked #</h6>
      </div>
      <div className="col-lg-6 col-md-4 col-8">
      <h3>{project.name}</h3>
      <p>
      {project.institution};
      </p>
      <p>
      Guided by {project.guide}
      </p>
      {
    //  <Link to={`/projects/${project.institution}/${project.name}`} className="btn btn-info">
    //   View Details
    //  </Link>
      }   
      </div>
      <div className="col-md-4 d-none d-md-block">
      <h4>Domains used</h4>
      <ul className="list-group">
      {domains.slice(0,4).map((dom,index)=>
         ( <li key={index} className="list-group-item">
          <i className="fa fa-check pr-1" />
          {dom}
          </li>)
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