import React, { Component } from 'react'
import {getProjectByName} from '../../actions/projectAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Common/Spinner';
import ProjectHeader from './ProjectHeader';
import ProjectOrigin from './ProjectOrigin';
import ProjectGithub from './ProjectGithub';
class Project extends Component {
    componentDidMount(){
        if(this.props.match.params.name){
            this.props.getProjectByName(this.props.match.params.institution,this.props.match.params.name);            
        }
    }
  render() {
      let {project,loading}=this.props.project;
      let data;
      if(project===null || loading){
          data=<Spinner />
      }else{
          data=<div className="container">
          <ProjectHeader project={project}/>
          <div className="ma3">
          <h3>Project Info</h3>
          </div>
          <ProjectOrigin project={project}/>
          <div className="ma3">
          <h3>Repo Owner</h3>
          </div>
          <ProjectGithub projectlink={project}/>
          </div>
      }
    return (
      <div>
        {data}
      </div>
    )
  }
}
Project.propTypes = {
    project:PropTypes.object.isRequired,
    getProjectByName:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
    project:state.project
})


export default connect(mapStateToProps,{getProjectByName})(Project);