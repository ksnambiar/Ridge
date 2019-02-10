import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteExperience} from '../../actions/profileAction';
class Experience extends Component {
    onClickDelete(id){
        this.props.deleteExperience(id);
    }
  render() {
      let disp;
      if(this.props.experience)
     { let exp=this.props.experience;
      let keys=Object.keys(exp);
      let values = Object.values(exp);
      disp = values.map((val,i)=>(
          <tr key={keys[i]}>
          <td>{val.company}</td>
          <td>{val.domain}</td>
          <td>{val.from} - {val.to=== ''?'Now':val.to}</td>
          <td>
          <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,keys[i])}>Delete</button>
          </td>
          </tr>
      ))}else{
          disp = (<tr><td>None so far</td></tr>)
      }
    return (
      <div>
      <h4 className="mb-4">Experience Credentials</h4>
      <table className="table">
      <thead>
        <tr>
        <th>Institution</th>
        <th>Title</th>
        <th>Duration</th>
        <th></th>
        </tr>
        
        {disp}
        
        </thead>
        </table>
      </div>
    )
  }
}
Experience.propTypes={
    deleteExperience:PropTypes.func.isRequired
}

export default connect(null,{deleteExperience})(Experience);