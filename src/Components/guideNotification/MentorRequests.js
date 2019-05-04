import React, { Component } from 'react'
import Requests from "./subComponenets/Requests";
import Accepted from "./subComponenets/Accepted";
import Rejected from "../Notification/DevStat/Rejected";
import {Badge,Nav} from "react-bootstrap"
import Spinner from "../Common/Spinner";
import {connect} from "react-redux";
import PropTypes from "prop-types";
export class MentorRequests extends Component {
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
        let guide_request = guideProfile.guide_request
        let pend=0,acc=0,rej=0;
        if(guide_request){
          Object.keys(guide_request).forEach(obj=>{
            if(guide_request[obj].status==="pending"){
              ++pend;
            }
            else if(guide_request[obj].status==="resolved"){
              ++acc;
            }
            else if(guide_request[obj].status==="rejected"){
              ++rej
            }
          })
        }
        if(loading===true){
          view=<Spinner/>
        }else{
        if(selected==="requests"){
  
          view=<Requests profile={guideProfile}/>
        }
        else if(selected==="accepted"){
          view=<Accepted profile={guideProfile}/>
        }
        else if(selected==="rejected"){
          view=<Rejected profile={guideProfile}/>
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
MentorRequests.propTypes = {
    profile:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    profile:state.profile
})
export default connect(mapStateToProps)(MentorRequests)
