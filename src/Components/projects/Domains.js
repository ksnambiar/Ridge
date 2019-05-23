import React, { Component } from 'react'
import {Card,Nav,Badge} from "react-bootstrap"
export class Domains extends Component {
    state={
        selected:"All"
    }
    onSelect(choice){
        this.setState({selected:choice})
    }
    render() {
        let options;
        let domains=[]
        const {selected}=this.state;
        const {projects}=this.props
        if(projects){
            projects.forEach(obj=>{
                obj.forEach(res=>{
                    if(!domains.includes(res)){
                        domains.push(res)
                    }
                })
            })
            options=domains.map((obj=>{
                return <Nav.Item>
                  <Nav.Link eventKey={obj} onSelect={this.onSelect.bind(this,obj)}><h6 style={{float:"left"}}>Accepted</h6></Nav.Link>
                </Nav.Item>
                              
            }))
        }else{
            options=null
        }
        return (
            <div>
                <Card>
                <Card.body>
                <Nav variant="pills" defaultActiveKey={this.state.selected} className="flex-column">
  <Nav.Item>
    <Nav.Link eventKey="All" onSelect={this.onSelect.bind(this,"All")}><h6 style={{float:"left"}}>All</h6></Nav.Link>
  </Nav.Item>
  
        </Nav>
                </Card.body>
                </Card>
            </div>
        )
    }
}

export default Domains
