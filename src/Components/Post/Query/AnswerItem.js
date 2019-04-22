import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom";
export default class AnswerItem extends Component {
  render() {
      const {answer} = this.props
      const d = new Date(answer.timestamp)
      
    return (
      <Card className="ma2">
        <Card.Body>
        <div className="row">
        <div className="col-md-3">
        <img
                  className="rounded-circle bg-light-blue"
                  src={`https://robohash.org/${answer.fullName}`}
                  alt="Profile Photo"
                  style={{width:"50px",height:"50px",float:"left"}}
            />
        <Link to={`/profile/${answer.uid}`}>{answer.fullName}</Link>
        <h6>at {d.getHours()}</h6>
        <h6>on {d.getDate()}</h6>  
        </div>
        <div className="col-md-7">
            {answer.description}
        </div>
        
        </div>
        </Card.Body>
      </Card>
    )
  }
}
