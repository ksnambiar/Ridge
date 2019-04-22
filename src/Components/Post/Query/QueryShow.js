import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import Spinner from "../../Common/Spinner"
export default class QueryShow extends Component {
  render() {
      const {query} = this.props;
      
      let view
      // d
      if(query){
        let d=new Date(query.timestamp)
        view = <Card  className="mv2">
        <Card.Header>
        <div className="row">
        <div className="col-md-2">
        <img
                    className="rounded-circle bg-light-blue"
                    src={`https://robohash.org/${query.ownerName}`}
                    alt="Profile Photo"
                    style={{width:"50px",height:"50px",float:"left"}}
              />
        </div>
        <div className="col-md-10">
        <h6>
              {query.ownerName}
              </h6>
              <p>
              {d.toDateString()} at {d.toTimeString().slice(0,8)}
              </p>
        </div>
        </div>
        </Card.Header>
        <Card.Body>
        {query.postData}
        </Card.Body>
        </Card>
      }else{
        //   d="random timing"
          view=<Spinner />
      }
      
    return (
      <div>
      {view}
      </div>
    )
  }
}
