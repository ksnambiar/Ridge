import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getDevProfiles} from '../../actions/profileAction';
import PropTypes from 'prop-types';

class Developers extends Component {
    componentWillMount(){
        this.props.getDevProfiles();
        console.log(this.props.profile)
    }

  render() {
      let { profiles } = this.props.profile;
    return (
      <div>
        
      </div>
    )
  }
}
Developers.propTypes={
    getDevProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    profile:state.profile,
    auth:state.auth
})
export default connect(mapStateToProps,{getDevProfiles})(Developers);