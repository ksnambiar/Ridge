import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Octicon,{getIconByName} from "@githubprimer/octicons-react"
export class WorkingProjects extends Component {
    render() {
        const {profile} = this.props.profile;

      let disp;
      if(this.props.projects)
     { let exp=this.props.projects;
        console.log(exp)
      let keys=Object.keys(exp);
      disp = keys.map((key,i)=>{
        const val=exp[key]
        return(
        <div key={key} className="panel ma1 pb2" style={{float:"left"}}>
        <div className="jumbotron bg-white ba shadow-5">
        <h5 className="mr2">{val.name}</h5>
        <Link to={`/projects/${profile.institution}/${val.name}`} className="btn btn-info mr1" title="project page"><Octicon icon={getIconByName("project")}/></Link>
        <Link to={`/project-status/${profile.institution}/${val.name}/${key}`} className="btn btn-info" title="more actions"><Octicon icon={getIconByName("gear")}/> </Link>
      </div>
        </div>
    )})
    }else{
          disp = (<tr><td>None so far</td></tr>)
      }
        return (
            <div>
            <h1 className="mb3">Contributions</h1>
            <div>    
            {disp}
            </div>
            </div>
        )
    }
}
WorkingProjects.propTypes={
    profile:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    profile:state.profile
})


export default connect(mapStateToProps)(WorkingProjects);