import React, { Component } from 'react'
import {Card,Badge} from 'react-bootstrap';
export default class OwnerDetails extends Component {
  render() {
      const {details}=this.props;
    return (
      <Card>
      <Card.Body>
      <div className="row">
      <div className="col-md-4">
      <img src={details.avatar_url} alt="profile image" className="mv1 ml2 w4 h4 center ba b--light-gray pa1"/>
      </div>
      <div className="col-md-8">
      <a href={details.html_url} target="_blank" className="no-underline center dim "><h5>{details.login}</h5></a>
      <div>
      <Badge variant="success" className="mv1">Name: {details.name}</Badge>
      </div>
      <div>
      <Badge variant="info" className="mv1">Repos: {details.public_repos}</Badge>
      </div>
      <div>
      <Badge variant="warning" className="mv1">Gists: {details.public_gists}</Badge>
      </div>
      <div>
      <Badge variant="secondary" className="mv1">Followers: {details.followers}</Badge>
      </div>
      </div>
      </div>
      </Card.Body>
      </Card>
    )
  }
}
