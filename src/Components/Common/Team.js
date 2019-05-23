import React,{Component} from 'react'
import {Badge,Card,CardImg, Button} from "react-bootstrap"
import Lakshya from "./TeamPics/Lakshya.jpg";
import Pranath from "./TeamPics/Pranath.jpeg"
import Abhishek2 from "./TeamPics/Abhishek2.jpeg"
import Sidharth from "./TeamPics/Sidharth.jpeg"
import Rushi from "./TeamPics/Rushi.jpeg"
import Octicon, { getIconByName } from "@githubprimer/octicons-react";
import {CopyToClipboard} from 'react-copy-to-clipboard';


class Team extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       copied:null
    };
  };
  render()
 { return (
    <div>
    <div>
    <h3 class="w3-center">THE CORE TEAM</h3>
        <p class="w3-center w3-large">The ones who runs this site behind the scenes</p>
    </div>
    <div className="row">
   
    <Card style={{width:"22rem"}} className=" ma2">
    <CardImg variant="top" src={Sidharth} />
    <Card.Body>
    <h3>K Sidhartha Nambiar</h3>
    <h6>Popularly known as</h6><Badge variant="info">Nambiar</Badge>
    <p class="w3-opacity">Team Lead</p>
    {
    // <p>An ambivert coder who developes crush on every girl he sees</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/NambiarSidharth" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="nambiar.sidharth00@gmail.com" onCopy={() => this.setState({copied:1})}>
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="8848779798" onCopy={() => this.setState({copied:2})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===1? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===2? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Pranath}/>
    <Card.Body>
    <h3>Keshava Pranath K</h3>
    <h6>Popularly known as</h6><Badge variant="info">The unstoppable orator</Badge>
    <p class="w3-opacity"></p>
    {
    // <p>An extreme extrovert who will start explaining concepts even if the person listening to him is not interested</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/kpranath" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="kpranath@gmail.com" onCopy={() => this.setState({copied:3})}>
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="8762919630" onCopy={() => this.setState({copied:4})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===3? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===4? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
   
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Abhishek2}/>
    <Card.Body>
    <h3>Abhishek S</h3>
    <h6>Popularly known as</h6><Badge variant="info">Boss Ambi</Badge>
    <p class="w3-opacity"></p>
    {
    // <p>A Boss personality who can burn each and everyone in the room with just a sentence</p>
    }       
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/NambiarSidharth" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="abhishekman.s@gmail.com" onCopy={() => this.setState({copied: 5})}>
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="7619411710" onCopy={() => this.setState({copied: 6})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===5? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===6? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
   
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Lakshya} />
    <Card.Body>
    <h3>Lakshya Sharma</h3>
    <h6>Popularly known as</h6><Badge variant="info">Genetic algorithm forever</Badge>
    <p class="w3-opacity"></p>
    {
    // <p>The Laughing Buddha who solves all the problems in the world with his genetic algorithm</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/Lakshya31" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="lakshya.secret@gmail.com" onCopy={() => this.setState({copied:7})} >
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="9741219832" onCopy={() => this.setState({copied:8})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===7? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===8? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
    </Card.Body>
    </Card>

    </div>
    <div className="row">
    <h3 className="w3-center">CONTRIBUTORS</h3>
    </div>
    <div className="row">
    
    <div className="row ma1">
    <Card style={{width:"22rem"}} className=" ma2">
    <CardImg variant="top" src={Rushi} />
    <Card.Body>
    <h3>Rushikesh C</h3>
    <h6>Popularly known as</h6><Badge variant="info">Rushi</Badge>
    <p class="w3-opacity">Beta Tester</p>
    {
    // <p>Fit Traveller who codes while travelling and sleeps with protein cans to fullfill his dream of bulking up</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/rushikc" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    </div>
    </div>
    
    </Card.Body>
    </Card>
    </div>

    </div>
    </div>

  )}
}
export default Team