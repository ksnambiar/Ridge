import React, { Component } from 'react'
import Login from './Login';
import LoginGuide from './LoginGuide';
import {Nav} from 'react-bootstrap';
import pconfig from '../../particlesjs-config.json'
import Particles from 'react-particles-js';
export default class RegPar extends Component {
state={
    regtab:"devLogin"
}

  changeView(view){
      this.setState({regtab:view})
  }
  render() {
    return (
      <div>
        <div>
        <Nav justify variant="tabs" defaultActiveKey="devLogin">
  <Nav.Item>
    <Nav.Link eventKey="devLogin" onSelect={this.changeView.bind(this,"devLogin")}>Developer</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="guideLogin" onSelect={this.changeView.bind(this,"guideLogin")}>Guide</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
        <div>
        {
            this.state.regtab==="devLogin"?<Login/>:<LoginGuide/>
        }
        </div>
      </div>
    )
  }
}
