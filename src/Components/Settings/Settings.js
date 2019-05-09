import React, { Component } from 'react'
import {Nav,Card} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ChangePassword from "./subComponents/ChangePassword";
export class Settings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selected:"details"
    }
  }
  onSelect(comp){
    this.setState({selected:comp})
  }
  render() {
    const {auth}=this.props;
    const {selected} = this.state;
    let view;
    if(selected==='change-password'){
      view=<ChangePassword auth={auth}/>
    }else if (selected==='details'){
      view=<p>details</p>
    }
    return (
      <div>
      <div className="row mt2">
      <div className="col-md-2">
      <Card>
      <Card.Body>
      <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
      <Nav.Item>
      <Nav.Link eventKey="details" onSelect={this.onSelect.bind(this,"details")}><h6>Details</h6></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="change-password" onSelect={this.onSelect.bind(this,"change-password")}><h6>Change Password</h6></Nav.Link>
    </Nav.Item>
      <Nav.Item>
    <Nav.Link eventKey="change-email" onSelect={this.onSelect.bind(this,"change-email")}><h6>Change Email</h6></Nav.Link>
  </Nav.Item>
    </Nav>
      </Card.Body>
      </Card>
      </div>
      <div className="col-md-10">
      {view}
      </div>
      </div>
      </div> 
    )
  }
}
Settings.propTypes = {
  auth:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
  auth:state.auth
})

export default connect(mapStateToProps)(Settings)
