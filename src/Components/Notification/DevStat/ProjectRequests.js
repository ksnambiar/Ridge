import React, { Component } from 'react'
import {Nav,Badge} from 'react-bootstrap'
import Requests from './Requests';
import Accepted from './Accepted';
import Rejected from './Rejected';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from '../../Common/Spinner'
class ProjectRequests extends Component {
    state={
        selected:"requests"
    }
    onSelect(choice){
        this.setState({selected:choice})
    }
  render() {
      let view;
      let {selected}=this.state;
      const {loading,guideProfile}=this.props.profile
      let profile
      const {utype} = this.props.auth;
      if(utype==="guide"){
        profile=guideProfile;
      }else{
        profile=this.props.profile.profile;
      }
      const {join_request}=profile
      let pend=0,acc=0,rej=0;
      if(join_request){
        Object.keys(join_request).forEach(obj=>{
          if(join_request[obj].status==="pending"){
            ++pend;
          }
          else if(join_request[obj].status==="resolved"){
            ++acc;
          }
          else if(join_request[obj].status==="rejected"){
            ++rej
          }
        })
      }
      if(loading===true){
        view=<Spinner/>
      }else{
      if(selected==="requests"){

        view=<Requests profile={profile}/>
      }
      else if(selected==="accepted"){
        view=<Accepted profile={profile}/>
      }
      else if(selected==="rejected"){
        view=<Rejected profile={profile}/>
      }
    }
    return (
      <div className="row">
        <div className="col-md-2">
        <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
  <Nav.Item>
    <Nav.Link eventKey="requests" onSelect={this.onSelect.bind(this,"requests")}><h6 style={{float:"left"}}>Pending</h6><Badge variant="light" className="mh1">{pend}</Badge></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="accepted" onSelect={this.onSelect.bind(this,"accepted")}><h6 style={{float:"left"}}>Accepted</h6><Badge variant="light" style={{marginLeft:"2px"}}>{acc}</Badge></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="rejected" onSelect={this.onSelect.bind(this,"rejected")}>
      <h6 style={{float:"left"}}>Rejected</h6><Badge variant="light" className="mh1">{rej}</Badge>
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
    profile:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  profile:state.profile,
  auth:state.auth
})
export default connect(mapStateToProps)(ProjectRequests)