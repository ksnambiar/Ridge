import React, { Component } from 'react'
import {getProjectByName} from '../../actions/projectAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Spinner from '../Common/Spinner';
import ProjectHeader from './ProjectHeader';
import ProjectOrigin from './ProjectTeam';
import ProjectGithub from './ProjectGithub';
import ProjectGuide from './ProjectGuide'; 
import RepoOwner from './RepoOwner';
import ProjectDescription from './ProjectDescription'
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
          <div className="row">
          <Link to={`/dev/projects/${project.institution}`} className="btn btn-light mv2 ba b--light-gray">Go back</Link>
          </div>
          <ProjectHeader project={project}/>
          <div className="mh2 row">
          <div className="col-md-6">
          <h3 style={{fontFamily:"Oswald"}} className="text-info">Description</h3>
          <ProjectDescription project={project}/>
          </div>
          <div className="col-md-3">
          <h3 style={{fontFamily:"Oswald"}} className="text-info">Team</h3>
          <ProjectOrigin project={project}/>
          </div>
          <div className="col-md-3">
          <h3 style={{fontFamily:"Oswald"}} className="text-info">Guide</h3>
          <div>
          <ProjectGuide project={project}/>
          </div>
          </div>

          </div>

          {project.githublink?<div className="row">
          <div className="col-md-6">
          <div className="ma3 center">
          <h3 style={{fontFamily:"Oswald"}} className="text-info">Github Details</h3>
          </div>
          <ProjectGithub projectlink={project}/>
          </div>
          <div className="col-md-6">
          <div className="ma3 center">
          <h3 style={{fontFamily:"Oswald"}} className="text-info">Repo Owner</h3>
          </div>
          <RepoOwner projectlink={project}/>
          </div> 
          <div className="row mv2">
          
          </div>
          </div>:null}
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