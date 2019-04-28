import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export class Announcements extends Component {
  render() {
    return (
      <div>
        <Card>
        <Card.Body>
        No announcements currently
        </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Announcements
