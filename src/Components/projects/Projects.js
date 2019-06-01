import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../../Components/Common/Spinner';
import {getProjectsByCollege} from '../../actions/projectAction';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import Domains1 from './Domains1' 
import Search from './Search';
class Projects extends Component {
  state={
    query:'',
    domain:'All'
  }
  componentDidMount(){
    let college=this.props.match.params.institution;
    this.props.getProjectsByCollege(college);
  }
  domainSelect(domain){
    this.setState({domain:domain})
  }
  search(data){
    this.setState({query:data})
  }
  render() {
    const {loading}=this.props.project;
    let projects=this.props.project.projects;
    //sort function
    
    const {query,domain}=this.state;
    let projectItems;
    if(projects===null || loading){
      projectItems=<Spinner />
  }else{
    
    if(projects.length>0){
      projects.sort((a,b)=>{
        if ( a.rank < b.rank ){
          return -1;
        }
        if ( a.rank > b.rank ){
          return 1;
        }
        return 0;
      })
      if(query===''){
        if(domain==='All'){
          projectItems=projects.map((obj,i)=>(
            <ProjectItem key={i} project={obj} />
          ))
        }else{
          projectItems=projects.map((obj,i)=>(
            obj.domains.includes(domain)?<ProjectItem key={i} project={obj} />:null
          ))
        }
      
      }else{
        if(domain==='All'){
          projectItems=projects.map((obj,i)=>(
            (obj.name.toLowerCase().includes(query.toLowerCase()))?<ProjectItem key={i} project={obj} />:null
          ))
        }else{
          projectItems=projects.map((obj,i)=>(
            (obj.name.toLowerCase().includes(query.toLowerCase())&&obj.domains.includes(domain))?<ProjectItem key={i} project={obj} />:null
          ))
        }
        
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
      <div className="row mv2">
      <div className="col-md-9">
      {projectItems}
      </div>
      <div className="col-md-3">
      {
      <Domains1 projects={projects} domainSelect={this.domainSelect.bind(this)} />
      }
      </div>
      </div>
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