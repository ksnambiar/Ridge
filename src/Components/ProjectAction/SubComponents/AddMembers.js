import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {getprofilesbycollege} from "../../../actions/profileAction";
import MemberList from "./MemberList";
import ProjectTeam from "../../Project/ProjectTeam"
import Spinner from "../../Common/Spinner"
export class AddMembers extends Component {
  componentDidMount(){
    const {institution}=this.props
    this.props.getprofilesbycollege(institution);
  }
  render() {
    const {profiles,loading} = this.props.profile;
    let view1,view2;
    if(loading){
      view1=<Spinner />
      view2=<Spinner />
    }else{
      view1=<MemberList profiles={profiles} project={this.props.project} pid={this.props.pid}/>
    }
    
    return (
      <div>
      <div className="row">
      <div className="col-md-8">
      <Card className="ma2">
        <Card.Header>
        <h4>Developers around you</h4>
        </Card.Header>
        <Card.Body>
        {view1}
        </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
      <Card className="ma2">
        <Card.Header>
        <h4>Members</h4>
        </Card.Header>
        <Card.Body>
        <ProjectTeam className="ml2" project={this.props.project}/>
        </Card.Body>
        </Card>
      </div>
      </div>
      </div>
    )
  }
}
AddMembers.propTypes={
  profile:PropTypes.object.isRequired,
  getprofilesbycollege:PropTypes.func.isRequired
}
const mapStateToProps = state=>({
  profile:state.profile
})

export default connect(mapStateToProps,{getprofilesbycollege})(AddMembers);