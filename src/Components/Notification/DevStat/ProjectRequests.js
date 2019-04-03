import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
import Requests from './Requests';
import {connect} from "react-redux";
import PropTypes from "prop-types";
class ProjectRequests extends Component {
    state={
        selected:"requests",
        loading:false
    }
    onSelect(choice){
        this.setState({selected:choice})
    }
  render() {
      let view;
      let {selected}=this.state;
      const {profile}=this.props.profile
      if(selected==="requests"){

        view=<Requests profile={profile}/>
      }
      else if(selected==="accepted"){
        view=<p>accepted</p>
      }
      else if(selected==="rejected"){
        view=<p>rejected</p>
      }
    return (
      <div className="row">
        <div className="col-md-2">
        <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
  <Nav.Item>
    <Nav.Link eventKey="requests" onSelect={this.onSelect.bind(this,"requests")}>Requests</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="accepted" onSelect={this.onSelect.bind(this,"accepted")}>Accepted</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="rejected" onSelect={this.onSelect.bind(this,"rejected")}>
      Rejected
    </Nav.Link>
  </Nav.Item>
    </Nav>
        </div>
        <div className="col-md-10">
        {view}
        </div>
      </div>
    )
  }
}
ProjectRequests.propTypes={
    profile:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  profile:state.profile
})
export default connect(mapStateToProps)(ProjectRequests)