import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteProject} from '../../actions/profileAction';
import Modal from 'react-responsive-modal'
class Projects extends Component {
    state={
        open:false,
        selectedState:{}
    }
    onClickDelete(id){
        this.setState({open:false,selectedState:{}})
        this.props.deleteProject(id);
    }
    onOpenModal = (val,key) => {
        this.setState({ open: true,selectedState:{
            name:val.name,
            domains:val.domains,
            team:val.team,
            description:val.description,
            key:key,
            guide:val.guide,
            githublink:val.githublink
        } });

      };
     
      onCloseModal = () => {
        this.setState({ open: false,selectedState:{} });
      };
  render() {
      let {open} = this.state;
      let disp;
      if(this.props.projects)
     { let exp=this.props.projects;
      let keys=Object.keys(exp);
      let values = Object.values(exp);
      disp = values.map((val,i)=>(
        <div key={keys[i]} className="panel bg-white ma2 pa2" style={{float:"left"}}>
        <div className="jumbotron bg-white ba shadow-5">
        <h5 className="mr3" style={{float:"left"}}>{val.name}</h5>
        <button className="btn btn-info" onClick={this.onOpenModal.bind(this,val,keys[i])}>Details</button>
          <Modal open={open} onClose={this.onCloseModal} center>
          <div className="panel">
          <h3>{this.state.selectedState.name}</h3>
          <h6>Domains Covered:</h6><p>{this.state.selectedState.domains}</p>
          <h6>Team Members:</h6><p>{this.state.selectedState.team}</p>
          <h6>Guided By:</h6><p>{this.state.selectedState.guide}</p>
          <a href={this.state.selectedState.githublink} target="_blank">Github Link</a>
          <br/>
          <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,this.state.selectedState.key)}>Delete</button>
          </div>
      </Modal>
      </div>
        </div>
    ))
    
      //   disp = values.map((val,i)=>(
    //       <tr key={keys[i]}>
    //       <td>{val.name}</td>
    //       <td>{val.domains}</td>
    //       <td><a href={val.githublink}>{val.githublink}</a></td>
    //       <td>
    //       <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,keys[i])}>Delete</button>
    //       </td>
    //       </tr>
    //   ))
    }else{
          disp = (<tr><td>None so far</td></tr>)
      }
    return (
      <div>
      <h4 className="mb-4">Your Projects</h4>
      <div className="row">
      {disp}
      </div>
      {
    //       <table className="table">
    //   <thead>
    //     <tr>
    //     <th>Name</th>
    //     <th>Domains</th>
    //     <th>Link</th>
    //     <th></th>
    //     </tr>
        
    //     {disp}
        
    //     </thead>
    //     </table>
    }
      </div>
    )
  }
}
Projects.propTypes={
    deleteProject:PropTypes.func.isRequired
}

export default connect(null,{deleteProject})(Projects);