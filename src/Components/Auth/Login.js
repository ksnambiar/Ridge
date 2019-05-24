import React, { Component } from 'react'
import {loginUser} from '../../actions/authAction';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames'
class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        email:'',
        password:'',
        errors:{
          email:"",
          password:""
        }
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push(`/${this.props.auth.utype}/dashboard`);
    }
  }
  onSubmit(e){
    e.preventDefault();
    const user={
      email:this.state.email,
      password:this.state.password
    }
    this.props.loginUser(user,this.props.history);
  }
  componentWillReceiveProps(nextProps){

    if(nextProps.errors.error){
      this.setState({errors:nextProps.errors.error});
    }
    if(nextProps.auth.isAuthenticated){
      this.props.history.push(`/${nextProps.auth.utype}/dashboard`)
    }
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const {errors} = this.state
    return (
      <div>
      <div className="br2 ba b--black-10 mv4 shadow-5 center col-lg-5 col-md-7 col-sm-11" >
      <main className="pa4 black-80">
  <form className="measure center" onSubmit={this.onSubmit}>
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0 form_col">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 form_col" htmlFor="email">Email</label>
        <input className={classnames('form-control', {
          'is-invalid': errors.email
        })} type="email" name="email"  id="email-address" value={this.state.email} onChange={this.onChange}/>
        
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        
        </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6 form_col" htmlFor="password">Password</label>
        <input className={classnames('form-control', {
          'is-invalid': errors.password
        })} type="password" name="password"  id="password" value={this.state.password} onChange={this.onChange}/>
        
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        
        </div>
    </fieldset>
    <div className="">
      <input className="btn btn-info dim btn-block" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p className="form_col">Don't have an account?</p>
      <Link to="/register" className="f6 link dim black db form_col"> Register </Link>
    </div>
  </form>
</main>
      </div>
      </div>
    )
  }
}
Login.propTypes={
  loginUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  auth:state.auth,
  errors:state.errors
})
export default connect(mapStateToProps,{loginUser})(withRouter(Login));