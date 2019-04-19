import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import AnswerItem from "./AnswerItem";
export default class AnswerFeed extends Component {
    answerIt(){
        this.props.showForm()
    }
  render() {
    const {query,id} = this.props;  
    let answers
    if(query){
    answers=query.answers        
    }else{
        answers=null
    }
    let view
    let count
      if(answers){
          count=Object.keys(answers).length

          view=Object.keys(answers).map(obj=>{
              return <AnswerItem answer={answers[obj]}/>
          })
          console.log(answers)
      }else{
          count=0
          view=<div  className="row center ma2">
          No answers yet,
        Be the first one to answer
          </div>
      }
    return (
      <Card className="mv2">
      <Card.Header>
      <div className="row">
      <div className="col-md-8">
      {count} Answers till now
      </div>
      <div className="col-md-4">
      <Button onClick={this.answerIt.bind(this)}>
      Wanna Answer?
      </Button>
      </div>
      </div>
      </Card.Header>
        {view}
      </Card>
    )
  }
}
