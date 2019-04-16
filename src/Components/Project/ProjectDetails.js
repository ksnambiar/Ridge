import React, { Component } from 'react'
import {Card,Badge} from 'react-bootstrap';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
export default class ProjectDetails extends Component {
  render() {
      const {data} = this.props;
      console.log(data)
    return (
      <Card className="b3 center col-lg-9 col-md-9 col-sm-12 col-xs-12 mb3">
      <Card.Body>
      <div className="row">
      <div className="col-md-4">
      <Octicon icon={getIconByName("mark-github")} className="mr1 mv1" size="large"/>
      </div>
      <div className="col-md-8">
      <a href={data.gitUrl.svn_url} target="_blank"><h5>{data.name}</h5></a>
      <div className="row mv2">
      <Badge variant="info">Size:{data.size}</Badge>
      </div>
      <div className="row mv2">
      <Badge variant="success">Main Language: {data.language}</Badge>
      </div>
      <div className="row mv2">
      <Badge variant="secondary">Watchers: {data.watchers_count}</Badge>
      </div>
      </div>
      </div>
      </Card.Body>
      </Card>
    )
  }
}
