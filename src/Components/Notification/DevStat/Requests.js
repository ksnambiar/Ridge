import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
import {Card,Button} from 'react-bootstrap'
class Requests extends Component {

  render() {
    const profile=this.props.profile;
    let view;
    if(profile.join_request){
      const keys=Object.keys(profile.join_request)

      view=keys.map((obj,i)=>{
        let data=profile.join_request[obj]
        return <Card key={i}>
        <Card.Body>
        <p style={{float:"left"}}>You have got a request for project</p>
        <Button className="btn like mh1"><Octicon icon={getIconByName("thumbsup")}/></Button>
        <Button className="btn dislike hover-bg-red mh1"><Octicon icon={getIconByName("thumbsdown")}/></Button>
        </Card.Body>
        </Card>
      })
    }else{
      view=<Card>
      <Card.Body>
      <p>No requests yet</p>
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
export default Requests;