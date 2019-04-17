import React, { Component } from 'react'
import Register from './Register';
import RegisterGuide from './RegisterGuide';
import {Nav} from 'react-bootstrap';
export default class RegPar extends Component {
state={
    regtab:"devRegister"
}

  changeView(view){
      this.setState({regtab:view})
  }
  render() {
    return (
      <div>
        <div>
        <Nav justify variant="tabs" defaultActiveKey="devRegister">
  <Nav.Item>
    <Nav.Link eventKey="devRegister" onSelect={this.changeView.bind(this,"devRegister")}>Developer</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="guideRegister" onSelect={this.changeView.bind(this,"guideRegister")}>Guide</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
        <div>
        {
            this.state.regtab==="devRegister"?<Register/>:<RegisterGuide/>
        }
        </div>
      </div>
    )
  }
}
