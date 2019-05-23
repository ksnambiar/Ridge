import React, { Component } from 'react'
import {Button,Form,Row} from "react-bootstrap"
import Octicon, { getIconByName } from '@githubprimer/octicons-react';
class SearchGuide extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
    fullName:''
   }
   this.onSubmit=this.onSubmit.bind(this)
      this.onChange=this.onChange.bind(this)
 }

 onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
 
 onSubmit(e){
    e.preventDefault();
    this.props.search(this.state.search)
    console.log(this.state)
 }

 render() {
   return (
     <Form onSubmit={this.onSubmit}>
        <Form.Group as={Row}>
        <div>
       <input type="search" name="search" className="form-control" placeholder="Search Guide" value={this.state.search} onChange={this.onChange}/>
       </div>
       <div>
        <Button type="submit" variant="info"><Octicon icon={getIconByName("search")} /></Button>
        </div>
        </Form.Group>
     </Form>
   )
 }
}

export default SearchGuide