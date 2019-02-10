import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteProject} from '../../actions/profileAction';
class Projects extends Component {
    onClickDelete(id){
        this.props.deleteProject(id);
    }
  render() {
      let disp;
      if(this.props.projects)
     { let exp=this.props.projects;
      let keys=Object.keys(exp);
      let values = Object.values(exp);
      disp = values.map((val,i)=>(
          <tr key={keys[i]}>
          <td>{val.name}</td>
          <td>{val.domains}</td>
          <td><a href={val.githublink}>{val.githublink}</a></td>
          <td>
          <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,keys[i])}>Delete</button>
          </td>
          </tr>
      ))}else{
          disp = (<tr><td>None so far</td></tr>)
      }
    return (
      <div>
      <h4 className="mb-4">Your Projects</h4>
      <table className="table">
      <thead>
        <tr>
        <th>Name</th>
        <th>Domains</th>
        <th>Link</th>
        <th></th>
        </tr>
        
        {disp}
        
        </thead>
        </table>
      </div>
    )
  }
}
Projects.propTypes={
    deleteProject:PropTypes.func.isRequired
}

export default connect(null,{deleteProject})(Projects);