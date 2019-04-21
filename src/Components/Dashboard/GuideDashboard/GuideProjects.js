import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Card,Button} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';

export class GuideProjects extends Component {
  
  render() {
      const {profile} = this.props;
      let view
      if(profile.projects){
        view = Object.keys(profile.projects).map((obj,i)=>{
            const data=profile.projects[obj]
            return <Card key={i} className="ma2" style={{ width: '18rem' }}>
            <Card.Body className="center">
            <h5 className="center">{data.name}</h5>
            <div className="row center">
            <Button className="rounded-circle mh1" title="info"><Octicon icon={getIconByName("info")}/></Button>
            <Button className="rounded-circle mh1" title="add developers"><Octicon icon={getIconByName("person")}/></Button>
            <Button className="rounded-circle mh1" title="add Mentor"><Octicon icon={getIconByName("mortar-board")}/></Button>
            </div>
            </Card.Body>
            </Card>
        })
      }else{
          view=<h5 className="center ma3">No Projects Yet</h5>
      }
    return (
      <div>
       <h3>Guide Projects</h3>
        <Card className="mv1">
        {view}
        </Card>
      </div>
    )
  }
}

export default GuideProjects
