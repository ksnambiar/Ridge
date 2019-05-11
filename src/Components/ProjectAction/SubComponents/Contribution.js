import React, { Component } from 'react'
import { Card,Badge } from 'react-bootstrap';

export class Contribution extends Component {
  render() {
      const {contribution}=this.props
     let activity;
     if(contribution){
         activity=contribution.weeks.map((obj,i)=>{
             let time=new Date(obj.w)
             if(obj.a===0 && obj.d===0 && obj.c===0){
                 return null
             }else{
                return <Card key={i}>
             <Card.Body>
             week {i+1}
             <Badge >Additions:{obj.a}</Badge>
             <Badge >Deletions:{obj.d}</Badge>
             <Badge >Commits:{obj.c}</Badge>
             </Card.Body>
             </Card>
             }
         })
     }else{
         activity=null;
     }
    return (
      <div>
        <Card>
        <Card.Body>
        <div className="row">
          <div className="col-md-4">
          <img src={contribution.author.avatar_url} alt="profile img"/>
          </div>
        </div>
        </Card.Body>
        </Card>
        <div className="row">
        {activity}
        </div>
      </div>
    )
  }
}

export default Contribution
