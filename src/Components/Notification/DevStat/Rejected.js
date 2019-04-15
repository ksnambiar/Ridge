import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
export default class Rejected extends Component {
    render() {
        const profile=this.props.profile;
        let view;
        if(profile.join_request){
          const keys=Object.keys(profile.join_request)
          let college=profile.institution
          view=keys.map((obj,i)=>{
            let data=profile.join_request[obj]
            if(data.status==="rejected"){
            return <Card key={i}>
            <Card.Body>
            <p style={{float:"left"}}>id:{data.projectKey}</p>
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
