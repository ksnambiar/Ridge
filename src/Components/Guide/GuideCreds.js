import React, { Component } from 'react';
import {Card,Badge} from "react-bootstrap"; 
import {Link} from "react-router-dom";
export class GuideCreds extends Component {
  render() {
      const {profile} = this.props
      //experience
      const exp=profile.experience?Object.keys(profile.experience).map((k,i)=>{
          let data=profile.experience[k];
          return <Card key={i} className="center mv2" >
        <Card.Body>
        <h4>{data.company}</h4>
        <h5>Designation:</h5><Badge variant="success">{data.designation}</Badge>
        {
            data.to?<div>
            <h5>From : </h5><p>{data.from}</p>
            <h5>To : </h5><p>{data.to}</p>
            </div>:<Badge variant="dark">Latest</Badge>
        }
        </Card.Body>
          </Card>
      }):<Card>
      <Card.Body>
      No Experience details
      </Card.Body>
      </Card>
      //education
      const edu=profile.education?Object.keys(profile.education).map((k,i)=>{
        let data=profile.education[k];
        return <Card key={i} className="center mv2" >
      <Card.Body>
      <h4>{data.institution}</h4>
      <h5>Degree:</h5><Badge variant="success">{data.degree}</Badge>
      {
          data.to?<div>
          <h5>From : </h5><p>{data.from}</p>
          <h5>To : </h5><p>{data.to}</p>
          </div>:<Badge variant="dark">Latest</Badge>
      }
      </Card.Body>
        </Card>
    }):<Card>
    <Card.Body>
    No Education details
    </Card.Body>
    </Card>
    //projects
    const proj=profile.projects?Object.keys(profile.projects).map((k,i)=>{
        let data=profile.projects[k];
        return <Card key={i} className="center mv2" >
      <Card.Body>
      <Link to={`/projects/${profile.institution}/${data.name}`} className="f5 h4">{data.name}</Link>
      <h5>Description:</h5><p>{data.description}</p>
      {
          data.guide?<div>
          <p>Guides exist</p>
          </div>:<p>No Guides yet</p>
      }
      <a href={data.githublink} target="_blank">Github Link</a>
      </Card.Body>
        </Card>
    }):<Card>
    <Card.Body>
    No Project done yet
    </Card.Body>
    </Card>
    //mentoring projects
    const mproj=profile.mprojects?Object.keys(profile.mprojects).map((k,i)=>{
        let data=profile.mprojects[k];
        return <Card key={i} className="center mv2" >
      <Card.Body>
      <Link to={`/projects/${profile.institution}/${data.name}`} className="center f5 h4">{data.name}</Link>
      </Card.Body>
        </Card>
    }):<Card>
    <Card.Body>
    No Project being mentored currently
    </Card.Body>
    </Card>
    return (
      <div>
      <hr />

      <div className="row">
      <div className="col-md-6">
      <h3 className="center text-info">Experience</h3>
      {exp}
      </div>
      <div className="col-md-6">
      <h3 className="center text-info">Education</h3>
      {edu}
      </div>
      </div>
      <hr />

      <div className="row">
      <div className="col-md-6">
      <h3 className="center text-info">Projects</h3>
      {proj}
      </div>
      <div className="col-md-6">
      <h3 className="center text-info">Mentoring Projects</h3>
      {mproj}
      </div>
      </div>
      </div>
    )
  }
}

export default GuideCreds
