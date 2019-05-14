import React, { Component } from 'react'
import Spinner from "../../Common/Spinner";
import axios from "axios";
import {Nav,Card} from "react-bootstrap";
import Contribution from './Contribution';
import TotalContribution from "./TotalContribution";
export class Stats extends Component {
    state={
        clientId:'5d8243ed93467bbc02c7',
        clientSecret: '1df9aad9b3bf785cb2ba29cbf9d34de3229ec651',
        loading:false,
        contribution:null,
        selected:"overall",
        index:-1
    }
    componentDidMount(){
        this.setState({loading:true});
        const {clientId,clientSecret} = this.state;
        const {project} = this.props
        console.log(project.githublink.split("/"))
        let len1=project.githublink.split("/").length;
        let username=project.githublink.split("/")[len1-2]
        let pname=project.githublink.split("/")[len1-1]
        axios.get(
            `https://api.github.com/repos/${username}/${pname}/stats/contributors?client_id=${clientId}&client_secret=${clientSecret}`
          ).then(data=>{
               this.setState({contribution:data.data,loading:false})
          })
          .catch(err=>{
              console.log(err)
          })
    }
    onSelect(comp,i){
        this.setState({selected:comp,index:i})
      }
  render() {
      let view,side;
      const {contribution,loading,index}=this.state;
      console.log(contribution)
      if(loading||contribution===null){
          view=<Spinner />
          side=null
      }else{if(Array.isArray(contribution)){

        if(index===-1){
            view=<TotalContribution contribution={contribution}/>
        }else{
            view=<Contribution contribution={contribution[index]}/>
        }
        if(contribution.length>0){
            console.log(contribution)
        side=contribution.map((obj,i)=>{
            return  <Nav.Item key={i}>
            <Nav.Link eventKey={obj.author.login} onSelect={this.onSelect.bind(this,obj.author.login,i)}><h6>{obj.author.login}</h6></Nav.Link>
          </Nav.Item>
        })
      }else{
          view=<p>No results</p>
          side=null
      }
        
    }else{
        side=null
    }
      }
    return (
      <div>
      <div className="row">
      <div className="col-md-8">
      {view}
      </div>

      <div >
      <Card>
      <Card.Body>
      <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
      <Nav.Item>
            <Nav.Link eventKey="overall" onSelect={this.onSelect.bind(this,"overall",-1)}><h6>Overall</h6></Nav.Link>
    </Nav.Item>
    {side}
     </Nav>
      </Card.Body>
      </Card>
      </div>
      </div>
      </div>
    )
  }
}

export default Stats
