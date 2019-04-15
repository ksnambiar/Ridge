import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
export default class ProjectDetails extends Component {
  render() {
      const {data} = this.props;
      console.log(data)
    return (
      <Card className="b3 center col-lg-9 col-md-9 col-sm-12 col-xs-12 mb3">
      <Octicon icon={getIconByName("mark-github")} className="btn_col round" size="large"/>
      
      <Card.Body>
      <div>
        sdf
      </div>
      </Card.Body>
      </Card>
    )
  }
}
