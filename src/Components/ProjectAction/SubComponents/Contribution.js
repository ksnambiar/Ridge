import React, { Component } from 'react'
import { Card,Badge } from 'react-bootstrap';

export class Contribution extends Component {
  render() {
      const {contribution}=this.props
     let activity;
     let totalcode=0,add=0,del=0
     if(contribution){
         activity=contribution.weeks.map((obj,i)=>{
             let time=new Date(obj.w)
             totalcode=totalcode+obj.a+obj.d
             add=add+obj.a
             del=del+obj.d
             if(obj.a===0 && obj.d===0 && obj.c===0){
                 return null
             }else{

                return <Card key={i} className="mv1">
             <Card.Body>
             week {i+1}
             <Badge variant="success" className="mh2">Additions:{obj.a}</Badge>
             <Badge variant="danger" className="mh2">Deletions:{obj.d}</Badge>
             <Badge variant="warning" className="mh2">Commits:{obj.c}</Badge>
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
          <div className="col-md-8">
          <div className="row">
          <a href={contribution.author.html_url} target="_blank">{contribution.author.login}</a>
          </div>
          <div className="row mv2">
          <Badge variant="info" className="mh2">Total Commits: {contribution.total}</Badge>
         <Badge variant="primary" className="mh2">Total Lines of code: {totalcode}</Badge>
          </div>
          <div className="row mv2">
          <Badge variant="primary" className="mh2">Total Additions: {add}</Badge>
         <Badge variant="primary" className="mh2">Total deletions: {del}</Badge>
          </div>
          <div className="row mv2">
          <Badge variant="success" className="mh2">LOC per Commint: {totalcode/contribution.total}</Badge>
          </div>
          </div>
        </div>
        </Card.Body>
        </Card>
        <div className="row mh1">
        {activity}
        </div>
      </div>
    )
  }
}

export default Contribution
