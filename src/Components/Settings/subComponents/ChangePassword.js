import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export class ChangePassword extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         oldPassword:"",
         password:"",
         againPassword:""
      };
     this.onChange=this.onChange.bind(this);
     this.onSubmit=this.onSubmit.bind(this);
    };
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const {auth} = this.props;
        console.log(this.state);
    }
  render() {
    return (
      <div>
      <Card>
      <Card.Body>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
      <input type="text" placeholder="Old Password" name="oldPassword" className="form-control" onChange={this.onChange} value={this.state.oldPassword}/>
      </div>
      <div className="form-group">
      <input type="text" placeholder="Old Password" name="oldPassword" className="form-control" onChange={this.onChange} value={this.state.password}/>
      </div>
      <div className="form-group">
      <input type="text" placeholder="Old Password" name="oldPassword" className="form-control" onChange={this.onChange} value={this.state.againPassword}/>
      </div>
      <input type="submit" value="Change Password" className="btn btn-warning" />
      </form>
      </Card.Body>
      </Card>
        
      </div>
    )
  }
}

export default ChangePassword
