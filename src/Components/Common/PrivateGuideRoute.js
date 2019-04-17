import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const PrivateGuideRoute = ({component:Component,auth,...rest})=>(
    <Route
    {...rest}
    render = {props=>
    (auth.isAuthenticated === true && auth.utype=== "guide" )?(
        <Component {...props}/>
    ):(
        <Redirect to="/login" />
    )
    }
    />
)
PrivateGuideRoute.propTypes = {
    auth:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    auth:state.auth
})
export default connect(mapStateToProps)(PrivateGuideRoute);