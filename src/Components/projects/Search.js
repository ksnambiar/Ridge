import React, { Component } from 'react'
import {Button} from "react-bootstrap"
import Octicon, { getIconByName } from '@githubprimer/octicons-react';
class Search extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      search: ''
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
     <form onSubmit={this.onSubmit}>
         <div classname="row">
       <input type="search" name="search" className="form-control" placeholder="Search With project Domains" value={this.state.search} onChange={this.onChange}/>
        <Button type="submit" variant="info"><Octicon icon={getIconByName("search")} /></Button>
        </div>
     </form>
   )
 }
}

export default Search
