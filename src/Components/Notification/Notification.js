import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
import ProjectRequests from './DevStat/ProjectRequests';
export default class Notification extends Component {
    state={
        selected:"projrequests",
        loading:false
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
      else if(selected==="accepted"){
        view=<p>accepted</p>
      }
    return (
      <div className="row">
        <div className="col-md-12 ph3 mv3">
        <Nav variant="tabs" defaultActiveKey={this.state.selected}>
  <Nav.Item>
    <Nav.Link eventKey="projrequests" onSelect={this.onSelect.bind(this,"projrequests")}>Project Requests</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="others" onSelect={this.onSelect.bind(this,"others")}>Others</Nav.Link>
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
