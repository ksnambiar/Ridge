import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export class Notifications extends Component {
  render() {
      const {profile} = this.props;
      let notifications
      if(profile){
      if(profile.notifications){
      notifications=Object.keys(profile.notifications).map(obj=>{
          let data= profile.notifications[obj];
          return <p>a notification</p>
      })
      }else{
          notifications=<Card><Card.Body>
          <p>no notifications yet</p>
          </Card.Body></Card>  
      }
    }else{
        notifications=<p>loading...</p>
    }

    return (
      <div>
        {notifications}
      </div>
    )
  }
}

export default Notifications
