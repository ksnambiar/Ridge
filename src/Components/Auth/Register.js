import React, { Component } from 'react'
import {registerUser} from '../../actions/authAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class Register extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       fullName:'',
       usn:'',
       email:'',
       contact:'',
       password:'',
       errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  
  onChange(e){
    console.log(e);
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    const newUser={
      fullName:this.state.fullName,
      usn:this.state.usn,
      email:this.state.email,
      contact:this.state.contact,
      password:this.state.password
    }
    this.props.registerUser(newUser);

  }


  render() {
    return (
      <div className="br2 ba dark-gray b--black-10 mv4 w-40 shadow-5 center">
      <article className="pa4 black-80">
      <form onSubmit={this.onSubmit}>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
          <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="full-name">Full Name</label>
            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="fullName"  id="fname" onChange={this.onChange} value={this.state.fullName}/>
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="USN">USN</label>
            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="usn"  id="usn" onChange={this.onChange} value={this.state.usn}/>
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="email">Email address</label>
            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email"  id="email-address" onChange={this.onChange} value={this.state.email}/>
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="contact">Contact no</label>
            <input className="b pa2 input-reset ba bg-transparent" type="text" name="contact"  id="contact" onChange={this.onChange} value={this.state.contact}/>
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" onChange={this.onChange} value={this.state.password}/>

          </div>
        </fieldset>
        <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" /></div>
      </form>
    </article>
      </div>
    )
  }
}
Register.propTypes={
  registerUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps= (state)=>({
  auth:state.auth
})
export default connect(mapStateToProps,{registerUser})(Register);