import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../../Components/Common/Spinner';
import {getProjectsByCollege} from '../../actions/profileAction';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
class Projects extends Component {
  componentDidMount(){
    let college=this.props.match.params.institution;
    this.props.getProjectsByCollege(college);
  }
  render() {
    const {profiles,loading}=this.props.profile;
    let profileKey ,length , projVal,projKey;
    let profileVal ,projects;
    let profileItems;
    if(profiles===null || loading){
      profileItems=<Spinner />
  }else{
    length=Object.keys(profiles).length;
      if(length>0){
        profileVal=Object.values(profiles);
          profileItems=profileVal.map((profile,i)=>
          { projects=profile.projects;
            if(projects){
            projVal=Object.values(projects);
            projKey=Object.keys(projects);
            return projVal.map((proj,i)=>(
              <ProjectItem key={projKey[i]} project={proj} institution={profile.institution}/>
            ))
            } else{
              return <p>some problem</p>
            }
          }
          )
      }else{
          profileItems=<h4>No Profiles Found</h4>
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
      {profileItems}
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
  }
)
export default connect(mapStateToProps,{getProjectsByCollege})(Projects);