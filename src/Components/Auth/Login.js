import React, { Component } from 'react'
import {loginUser} from '../../actions/authAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        email:'',
        password:'',
        errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    const user={
      email:this.state.email,
      password:this.state.password
    }
    this.props.loginUser(user,this.props.history);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <div className="br2 ba dark-gray b--black-10 mv4 w-40 shadow-5 center">
      <main className="pa4 black-80">
  <form className="measure center" onSubmit={this.onSubmit}>
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" value={this.state.email} onChange={this.onChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={this.state.password} onChange={this.onChange}/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db">Sign up</a>
      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
    </div>
  </form>
</main>
      </div>
    )
  }
}
Login.propTypes={
  loginUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  auth:state.auth,
  errors:state.errors
})
export default connect(mapStateToProps,{loginUser})(withRouter(Login));