import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Octicon, { getIconByName } from '@githubprimer/octicons-react';
import {guideResponse} from "../../../actions/projectAction"
import {connect} from "react-redux";
export class Requests extends Component {
    onClickHandler(college,pid,aid,rid,dec){
        this.props.guideResponse(college,pid,aid,rid,dec)
    }
  render() {
      const {profile} = this.props;
      let view
      if(profile.guide_request){
        view = Object.keys(profile.guide_request).map((obj,i)=>{
          let data = profile.guide_request[obj];
          return data.status==="pending"?<Card key={i}>
          <Card.Body>
          <Link to={`/projects/${profile.institution}/${data.projectName}`}>{data.projectName}</Link>
          <p>{data.projectName} has requested your expertise in guiding them</p>
          <p>what is your answer to {data.projectName} team?</p>
          <Button className="like ml2" title="Yes, I will mentor you guys" onClick={this.onClickHandler.bind(this,profile.institution,data.projectKey,data.projectAdmin,obj,"yes")}><Octicon icon={getIconByName("thumbsup")}/></Button>
          <Button className="dislike ml2" title="Sorry, I wont be able to" onClick={this.onClickHandler.bind(this,profile.institution,data.projectKey,data.projectAdmin,obj,"no")}><Octicon icon={getIconByName("thumbsdown")} /></Button>
          </Card.Body>
          </Card>:null
      })
      }else{
        view=<Card>
        <Card.Body>
        No requests Yet
        </Card.Body>
        </Card>
      }
      
      if(view.length===0){ 
          view=<Card><Card.Body>No requests from anyone yet</Card.Body></Card>
      }
    return (
      <div>
        {view}
      </div>
    )
  }
}

export default connect(null,{guideResponse})(Requests);
