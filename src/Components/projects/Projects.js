import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../../Components/Common/Spinner';
import {getProjectsByCollege} from '../../actions/projectAction';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import Search from './Search';
class Projects extends Component {
  state={
    query:''
  }
  componentDidMount(){
    let college=this.props.match.params.institution;
    this.props.getProjectsByCollege(college);
  }
  search(data){
    this.setState({query:data})
  }
  render() {
    const {projects,loading}=this.props.project;
    const {query}=this.state;
    let projectItems
    if(projects===null || loading){
      projectItems=<Spinner />
  }else{
    
    if(projects.length>0){
      if(query===''){
      projectItems=projects.map((obj,i)=>(
        <ProjectItem key={i} project={obj} />
      ))
      }else{
        projectItems=projects.map((obj,i)=>(
          obj.name.toLowerCase().includes(query.toLowerCase())?<ProjectItem key={i} project={obj} />:null
        ))
      }
    }else{
      projectItems = <div>No Projects Found in your Area</div>
    }
  }



    return (
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <div className="display-4 text-center">
      Developers Projects
      </div>
      <p className="lead text-center">
      Browse Through the projects     
      </p>
      <Search search={this.search.bind(this)}/>
      {projectItems}
      </div>
      </div>
      </div>
    )
  }
}
Projects.propTypes={
  profile:PropTypes.object.isRequired,
  getProjectsByCollege:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>(
  {
    auth:state.auth,
    profile:state.profile,
    project:state.project
  }
)
export default connect(mapStateToProps,{getProjectsByCollege})(Projects);