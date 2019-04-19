import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import {addAnswer} from "../../../actions/postAction"
import {connect} from "react-redux";
import PropTypes from "prop-types"
class AnswerForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         answer:""
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const {profile,guideProfile} = this.props.profile
        const {auth,id} = this.props

        let obj={
            data:this.state.answer,
            fullName:auth.user.fullName
        }
        if(auth.utype==="guide"){
            obj.institution=guideProfile.institution
        }else{
            obj.institution=profile.institution
        }
        this.props.addAnswer(obj,id)
        this.setState({answer:""})

    }
  render() {
    return (
      <div  className="mv2">
      <Card>
      <Card.Body>
      
      <form onSubmit={this.onSubmit}>
      <div className="row ma2">
        <textarea rows="4" cols="10" className="form-control" onChange={this.onChange} name="answer" value={this.state.value} placeholder="enter your answer">
        </textarea>
        </div>
        <div className="row">
        <Button variant="outline-info" type="submit">Submit</Button>
        </div>

        </form>
        </Card.Body>
       </Card> 
      </div>
    )
  }
}
AnswerForm.propTypes = {
    profile:PropTypes.object.isRequired,
    addAnswer:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    profile:state.profile,
    auth:state.auth
})

export default connect(mapStateToProps,{addAnswer})(AnswerForm)