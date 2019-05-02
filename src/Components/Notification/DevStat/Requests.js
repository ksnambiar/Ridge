import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {Card,Button} from 'react-bootstrap'
import {devResponse} from '../../../actions/projectAction';
import {Link} from "react-router-dom";
class Requests extends Component {
  acceptProj(college,pid,aid,rid){
    this.props.devResponse(college,pid,aid,rid,"yes")
  }
  rejectProj(college,pid,aid,rid){
    this.props.devResponse(college,pid,aid,rid,"no")
  }
  render() {
    const profile=this.props.profile;
    let view;
    if(profile.join_request){
      const keys=Object.keys(profile.join_request)
      let college=profile.institution
      view=keys.map((obj,i)=>{
        let data=profile.join_request[obj]
        if(data.status==="pending"){
        return <Card key={i}>
        <Card.Body>
        <p style={{float:"left"}}>You have an offer to join:</p>
        <Link to={`/projects/${profile.institution}/${data.projectName}`}>{data.projectName}</Link>
        <Button className="btn like mh1" onClick={this.acceptProj.bind(this,college,data.projectKey,data.projectAdmin,obj)}><Octicon icon={getIconByName("thumbsup")}/></Button>
        <Button className="btn dislike hover-bg-red mh1" onClick={this.rejectProj.bind(this,college,data.projectKey,data.projectAdmin,obj)}><Octicon icon={getIconByName("thumbsdown")}/></Button>
        </Card.Body>
        </Card>
        }
        else{
          return null
        }
      })
    }else{
      view=<Card>
      <Card.Body>
      <p>No Pending requests</p>
      </Card.Body>
      </Card>     
    }
    return (
      <div>
       {view}
      </div>
    )
  }
}
Requests.propTypes = {
  devResponse:PropTypes.func.isRequired
}
export default connect(null,{devResponse})(Requests);