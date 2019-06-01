import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getprofilesbycollege,deleteProject} from '../../actions/profileAction';
import {addDeveloperToTeam} from "../../actions/projectAction";
// import Modal from 'react-responsive-modal'
import {Link} from "react-router-dom"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import AddDeveloper from './AddDeveloper';
class Projects extends Component {
    state={
        open:false,
        addDev:false,
        addMentor:false,
        pid:null,
        selectedState:{}
    }
    onClickDelete(id){
        this.setState({open:false,selectedState:{}})
        this.props.deleteProject(id);
    }
    onAddDev = (pid,did,name,college)=>{
      console.log("reached onAddDev")
      this.props.addDeveloperToTeam(pid,did,name,college)
    }
    componentDidMount(){
      const {institution} = this.props.profile.profile
      this.props.getprofilesbycollege(institution);
    }
    onOpenModal = (val,key) => {
      console.log(val)
        this.setState({ open: true,selectedState:{
            name:val.name,
            domains:val.domains,
            team:val.team.map(obj=>obj.fullName),
            description:val.description,
            key:key,
            guide:val.guide?val.guide.map(obj=>obj.fullName):"None",
            githublink:val.githublink
        } });

      };
      openAddDev=(pid)=>{
        this.setState({addDev:true,pid:pid})
      }
      closeAddDev=()=>{
        this.setState({addDev:false})
      }
      onCloseModal = () => {
        this.setState({ open: false,selectedState:{} });
      };
  render() {
      let {open} = this.state;
      const {profile} = this.props.profile;
      console.log("asdas",this.selectedState)
      let disp;
      if(this.props.projects)
     { let exp=this.props.projects;
      let keys=Object.keys(exp);
      disp = keys.map((key,i)=>{
        const val=exp[key]
        return(
        <div key={key} className="panel ma1 pb2" style={{float:"left"}}>
        <div className="jumbotron bg-white ba shadow-5">
        <h5 className="mr2">{val.name}</h5>
        {
          // <button className="btn btn-info white mr1" onClick={this.onOpenModal.bind(this,val,keys[i])} title="info about the project"><Octicon icon={getIconByName("info")}/></button>

        // <button className="btn mr1" title="add developer to team" onClick={this.openAddDev.bind(this,keys[i])}><Octicon icon={getIconByName("person")}/> </button>
        }
        <Link to={`/projects/${profile.institution}/${val.name}`} className="btn btn-info mr1" title="project page"><Octicon icon={getIconByName("project")}/></Link>

        <Link to={`/project-action/${profile.institution}/${val.name}/${key}`} className="btn btn-info" title="more actions"><Octicon icon={getIconByName("gear")}/> </Link>
    {
      //       <Modal open={open} onClose={this.onCloseModal} center>
      //     <div className="panel">
      //     <h3>{this.state.selectedState.name}</h3>
      //     <h6>Domains Covered:</h6><p>{this.state.selectedState.domains}</p>
      //     <h6>Team Members:</h6><p>{this.state.selectedState.team}</p>
      //     <h6>Guided By:</h6><p>{this.state.selectedState.guide}</p>
      //     <a href={this.state.selectedState.githublink} target="_blank">Github Link</a>
      //     <br/>
      //     <button className="btn btn-danger" onClick={this.onClickDelete.bind(this,this.state.selectedState.key)}><Octicon icon={getIconByName("trashcan")}/></button>
      //     </div>
      // </Modal>
    }
      {
      this.state.pid?<AddDeveloper show={this.state.addDev} pid={this.state.pid} onAddDev={this.onAddDev} profiles={this.props.profile.profiles} profile={this.props.profile.profile} onHide={this.closeAddDev.bind(this)}/>
     :null 
    }
      </div>
        </div>
    )})
    
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
    deleteProject:PropTypes.func.isRequired,
    addDeveloperToTeam:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
  profile:state.profile
})
export default connect(mapStateToProps,{deleteProject,getprofilesbycollege,addDeveloperToTeam})(Projects);