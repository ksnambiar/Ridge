import React, { Component } from 'react'
import {registerGuide} from '../../actions/authAction';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames'
class RegisterGuide extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       fullName:'',
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
  componentWillReceiveProps(nextProps){
    if(nextProps.errors.errors){
      this.setState({errors:nextProps.errors.errors});
    }
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      window.location='/dashboard';
    }
  }
  onSubmit(e){
    e.preventDefault();
    const newUser={
      fullName:this.state.fullName,
      email:this.state.email,
      contact:this.state.contact,
      password:this.state.password
    }
    this.props.registerGuide(newUser,this.props.history);

  }


  render() {
    const {errors} = this.state
    return (
      <div className="br2 ba b--black-10 mv4 shadow-5 center col-lg-5 col-md-6">
      <article className="pa4 black-80">
      <form onSubmit={this.onSubmit}>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
          <legend className="f4 fw6 ph0 mh0 form_col">Sign Up</legend>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 form_col" htmlFor="full-name">Full Name</label>
            <input className={classnames('form-control', {
              'is-invalid': errors.fullName
            })} type="text" name="fullName"  id="fname" onChange={this.onChange} value={this.state.fullName} />
            
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}

            </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 form_col" htmlFor="email">Email address</label>
            <input className={classnames('form-control', {
              'is-invalid': errors.email
            })} type="email" name="email"  id="email-address" onChange={this.onChange} value={this.state.email}/>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}

            </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 form_col" htmlFor="contact">Contact no</label>
            <input className={classnames('form-control', {
              'is-invalid': errors.contact
            })} type="text" name="contact"  id="contact" onChange={this.onChange} value={this.state.contact}/>
            {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}

            </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6 form_col" htmlFor="password">Password</label>
            <input className={classnames('form-control', {
              'is-invalid': errors.password
            })} type="password" name="password"  id="password" onChange={this.onChange} value={this.state.password}/>
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}

          </div>
        </fieldset>
        <div className="mt3"><input className="btn btn-info btn-block" type="submit" value="Sign Up" /></div>
      </form>
    </article>
      </div>
    )
  }
}
RegisterGuide.propTypes={
  registerGuide:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps= (state)=>({
  auth:state.auth,
  errors:state.errors
})
export default connect(mapStateToProps,{registerGuide})(withRouter(RegisterGuide));