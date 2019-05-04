import React, { Component } from 'react'

export class Rejected extends Component {
    render() {
        const {profile} = this.props;
        let view
        if(profile.guide_request){
        view = Object.keys(profile.guide_request).map((obj,i)=>{
            let data = profile.guide_request[obj];
            return data.status==="rejected"?<Card key={i}>
            <Card.Body>
            <Link to={`/projects/${profile.institution}/${data.projectName}`}>{data.projectName}</Link>
            <p>You rejected a request from {data.projectName}</p>
            </Card.Body>
            </Card>:null
        })
        if(view.length===0){
            view=<p>No accepted requests</p>
        }
      }
        else{
          view=<p>No Requests Yet</p>
        }
      return (
        <div>
          {view}
        </div>
      )
    }
}

export default Rejected
