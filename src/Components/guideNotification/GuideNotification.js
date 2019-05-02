import React, { Component } from 'react'
import {connect} from "react-redux";
import {getCurrentGuideProfile} from "../../actions/profileAction";
import PropTypes from "prop-types";
import ProjectRequests from "../Notification/DevStat/ProjectRequests";
import {Nav} from "react-bootstrap";
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
    let view;
      let {selected}=this.state;
      if(selected==="projrequests"){
        view=<ProjectRequests />
      }
      else if(selected==="notifications"){
        view=<p>notifications</p>
      }
    return (
      <div className="row">
        <div className="col-md-12 ph3 mv3">
        <Nav variant="tabs" defaultActiveKey={this.state.selected}>
  <Nav.Item>
    <Nav.Link eventKey="notifications" onSelect={this.onSelect.bind(this,"notifictions")}>Notifications</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="projrequests" onSelect={this.onSelect.bind(this,"projrequests")}>Project Requests</Nav.Link>
  </Nav.Item>
  
  <Nav.Item>
  </Nav.Item>
    </Nav>
        </div>
        <div className="col-md-12 ba b--light-gray jumbotron">
        {view}
        </div>
      </div>
    )
  }
}

export default connect(null,{getCurrentGuideProfile})(GuideNotification)
