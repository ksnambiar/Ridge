import React, { Component } from 'react'
import {Card,Badge} from "react-bootstrap";
export class TotalContribution extends Component {
  render() {
      const {contribution}=this.props
      let sum,team;
      team=contribution.map((obj,i)=>{
          return <Card key={i} className="w5">
          <Card.Body>
          <div className="row">
          <div className="col-md-4">
          <img src={obj.author.avatar_url} alt="profile img"/>
          </div>
          <div className="col-md-8">
          <a href={obj.author.html_url} target="_blank">{obj.author.login}</a>
          <Badge variant="info">Commits: {obj.total}</Badge>
          </div>
          </div>
          </Card.Body>
          </Card>
      })
    return (
      <div>
        <Card>
        <Card.Body>
        
        </Card.Body>
        </Card>      
        {team}  
      </div>
    )
  }
}

export default TotalContribution
