import React, { Component } from 'react'
import {connect} from "react-redux";
import {getCurrentGuideProfile} from "../../actions/profileAction";
import PropTypes from "prop-types";
import ProjectRequests from "../Notification/DevStat/ProjectRequests";
import {Nav} from "react-bootstrap";
import Notifications from "./Notifications";
import MentorRequests from "./MentorRequests";
export class GuideNotification extends Component {
  state={
    selected:"notifications",
    loading:false
  }
  componentDidMount(){
    this.props.getCurrentGuideProfile()
  }
  onSelect(choice){
    this.setState({selected:choice})
}
  render() {
    const {guideProfile} = this.props.profile;

    let view;
      let {selected}=this.state;
      if(selected==="projrequests"){
        view=<ProjectRequests />
      }
      else if(selected==="notifications"){
        view=<Notifications profile={guideProfile} />
      }
      else if(selected==="guiderequest"){
        view=<MentorRequests profile={guideProfile} />
      }
    return (
      <div className="row">
        <div className="col-md-12 ph3 mv3">
        <Nav variant="tabs" defaultActiveKey={this.state.selected}>
  <Nav.Item>
    <Nav.Link eventKey="notifications" onSelect={this.onSelect.bind(this,"notifications")}>Notifications</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="projrequests" onSelect={this.onSelect.bind(this,"projrequests")}>Project Requests</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="guiderequest" onSelect={this.onSelect.bind(this,"guiderequest")}>Mentor Requests</Nav.Link>

  </Nav.Item>
    </Nav>
        </div>
        <div className="col-md-12">
        {view}
        </div>
      </div>
    )
  }
}
GuideNotification.propTypes={
  profile:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired,
  getCurrentGuideProfile:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
  profile:state.profile,
  auth:state.auth
})

export default connect(mapStateToProps,{getCurrentGuideProfile})(GuideNotification)
