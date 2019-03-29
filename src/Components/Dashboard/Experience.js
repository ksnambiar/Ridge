import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteExperience} from '../../actions/profileAction';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import Modal from 'react-responsive-modal';
class Experience extends Component {
    state={
        open:false,
        selectedState:{
        }
    }
    onClickDelete(id){
        this.setState({open:false,selectedState:{}})
        this.props.deleteExperience(id);
    
    }
    onOpenModal = (val,key) => {
        this.setState({ open: true,selectedState:{
            company:val.company,
            domain:val.domain,
            from:val.from,
            to:val.to,
            description:val.description,
            key:key
        } });

      };
     
      onCloseModal = () => {
        this.setState({ open: false,selectedState:{} });
      };
  render() {
      let disp;
      let {open} = this.state
      if(this.props.experience)
     { let exp=this.props.experience;
      let keys=Object.keys(exp);
      let values = Object.values(exp);
      disp = values.map((val,i)=>(
          <div key={keys[i]} className="panel ma2 pa2" style={{float:"left"}}>
          <div className="jumbotron bg-white ba shadow-5">
          <h5 className="mh3 mv1" style={{float:"left"}} >{val.company}</h5>
          <button className="btn btn-info" onClick={this.onOpenModal.bind(this,val,keys[i])}><Octicon icon={getIconByName("info")}/></button>
            <Modal open={open} onClose={this.onCloseModal} center>
            <div className="panel">
            <h3>{this.state.selectedState.company}</h3>
            <h6>Domain of Work:</h6><p>{this.state.selectedState.domain}</p>
            <h6>Duration:</h6><p>{this.state.selectedState.from} - {this.state.selectedState.to=== ''?'Now':this.state.selectedState.to}</p>
            <h6>Description:</h6><p>{this.state.selectedState.description}</p>
            <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,this.state.selectedState.key)}><Octicon icon={getIconByName("trashcan")}/></button>
            </div>
        </Modal>
        </div>
          </div>
      ))
    //   disp = values.map((val,i)=>(
    //       <tr key={keys[i]}>
    //       <td>{val.company}</td>
    //       <td>{val.domain}</td>
    //       <td>{val.from} - {val.to=== ''?'Now':val.to}</td>
    //       <td>
    //       <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,keys[i])}>Delete</button>
    //       </td>
    //       </tr>
    //   ))
    }else{
          disp = (<tr><td>None so far</td></tr>)
      }
    return (
      <div  className="mv3">
      <h4 className="mb-4">Experience Credentials</h4>
      
      <div className="row">
      {disp}
      </div>
{
        //   <table className="table">
    //   <thead>
    //     <tr>
    //     <th>Institution</th>
    //     <th>Title</th>
    //     <th>Duration</th>
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
Experience.propTypes={
    deleteExperience:PropTypes.func.isRequired
}

export default connect(null,{deleteExperience})(Experience);