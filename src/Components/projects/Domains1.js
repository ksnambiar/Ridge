import React, { Component } from 'react'
import {Card,Nav,Badge} from "react-bootstrap"

export class Domains1 extends Component {
    state={
        selected:"All"
    }
    onSelect(choice){
        this.setState({selected:choice})
        this.props.domainSelect(choice)
    }
    render() {
        let options;
        let domains=[]
        const {selected}=this.state;
        const {projects}=this.props;
        if(projects){
            projects.forEach(obj=>{
                obj.domains.forEach(res=>{
                    if(!domains.includes(res.trim())){
                        domains.push(res.trim())
                    }
                })
            })
            options=domains.map((obj=>{
                return <Nav.Item>
                  <Nav.Link eventKey={obj} onSelect={this.onSelect.bind(this,obj)}><h6>{obj}</h6></Nav.Link>
                </Nav.Item>
                              
            }))
        }else{
            options=null
        }
        return (
            <Card>
               <Card.Body>
                {
                <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
  <Nav.Item>
    <Nav.Link eventKey="All" onSelect={this.onSelect.bind(this,"All")}><h6>All</h6></Nav.Link>
  </Nav.Item>
                    {options}
        </Nav>
                }
               </Card.Body>
            </Card>
        )
    }
}

export default Domains1;