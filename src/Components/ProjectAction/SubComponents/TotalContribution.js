import React, { Component } from 'react'
import {Card,Badge} from "react-bootstrap";
import PieChart from 'react-minimal-pie-chart';

export class TotalContribution extends Component {
  render() {
      const {contribution}=this.props
      let sum,team,total_commits=0,total_lines=0,total_linesperperson=0;
      let total_lines_arr=[]
      if(contribution!=={}){
        contribution.forEach(obj=>{
          total_commits+=obj.total;
          total_linesperperson=0
          obj.weeks.forEach(obj=>{
              total_linesperperson+=(obj.a+obj.d)
              total_lines+=(obj.a+obj.d)
          })
          total_lines_arr.push(total_linesperperson)
        })
        team=contribution.map((obj,i)=>{
          return <Card key={i} className="w5 mv2">
          <Card.Body>
          <div className="row">
          <div className="col-md-4">
          <img src={obj.author.avatar_url} alt="profile img"/>
          </div>
          <div className="col-md-8">
          <a href={obj.author.html_url} target="_blank">{obj.author.login}</a>
          <Badge variant="info">Commits: {obj.total}</Badge>
          <Badge variant="primary">% contribution:{((total_lines_arr[i]/total_lines)*100).toFixed(3)}</Badge>

          </div>
          </div>
          </Card.Body>
          </Card>
      })
      }else{
        team=null
      }
      
    return (
      <div>
      <div className='mv1 row'>
      <h4 className="mv2">Code Overall Stats</h4>
      </div>
        <Card>
        <Card.Body>
        <div>
        <Badge variant="info" className="mh2">Total Commits:{total_commits}</Badge>
        <Badge variant="secondary" className="mh2">Total Contributors:{contribution.length}</Badge>
        <Badge variant="dark" className="mh2">Total Lines of Code:{total_lines}</Badge>
        <Badge variant="primary" className="mh2">Lines of Code per person:{(total_lines/contribution.length).toFixed(3)}</Badge>
        <Badge variant="warning" className="mh2">Lines of code per commit :{(total_lines/total_commits).toFixed(3)}</Badge>
        </div>
        </Card.Body>
        </Card>      
        <div className="mt3">
        <h4 className="mv2">Contributors</h4>
        {team}
        </div>  
      </div>
    )
  }
}

export default TotalContribution
