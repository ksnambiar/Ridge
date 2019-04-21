import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import Octicon,{getIconByName} from '@githubprimer/octicons-react';

export class GuideExperience extends Component {
    render() {
        const {profile} = this.props;
        let view
        if(profile.experience){
          view = Object.keys(profile.experience).map((obj,i)=>{
            const data=profile.experience[obj]
            return <Card key={i} className="ma2" style={{ width: '18rem' }}>
            <Card.Body className="center">
            <h5 className="center">{data.company}</h5>
            <div className="row center">
            <Button className="rounded-circle mh1" title="info"><Octicon icon={getIconByName("info")}/></Button>
           </div>
            </Card.Body>
            </Card>
          })
        }else{
            view=<h5 className="center ma3">No experience Information yet</h5>
        }
      return (
        <div>
         <h3>Guide experience</h3>
          <Card className="mv1">
          {view}
          </Card>
        </div>
      )
    }
}

export default GuideExperience
