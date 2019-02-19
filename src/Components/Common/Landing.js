import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import landing from "./landing.jpg";
class Landing extends Component {
  componentDidMount(){
    let {isAuthenticated} = this.props.auth;
    if(isAuthenticated){
     
      this.props.history.push('/dashboard')
    }
  }
  render() {
    let {isAuthenticated} = this.props.auth;
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Ridge</h1>
                  <p className="lead">
                    {" "}
                    A Complete Social Network who love to do something innovative
                  </p>
                  <hr />
                  {isAuthenticated?
                    <Link to='/dashboard' className="btn btn-lg btn-info mr-2">Enter</Link>
                    :
                    <div>
                    <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth:PropTypes.object.isRequired
}

const mapStateToProps= (state)=>({
  auth:state.auth
})
export default connect(mapStateToProps)(withRouter(Landing));