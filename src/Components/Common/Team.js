import React from 'react'
import {Badge,Card,CardImg} from "react-bootstrap"
import Lakshya from "./TeamPics/Lakshya.jpg";
import Pranath from "./TeamPics/Pranath.jpeg"
import Sidharth from "./TeamPics/Sidharth.jpeg"
function Team() {
  return (
    <div>
    <div>
    <h3 class="w3-center">THE TEAM</h3>
        <p class="w3-center w3-large">The ones who runs this site behind the scenes</p>
    </div>
    <div className="row">
   
    <Card style={{width:"20rem"}} className=" ma2">
    <CardImg variant="top" src={`${Sidharth}/100px180`} style={{height:"30rem"}}/>
    <Card.Body>
    <h3>K Sidhartha Nambiar</h3>
    <h6>Popularly known as</h6><Badge variant="info">Nambiar</Badge>
    <p class="w3-opacity">Team Lead</p>
    <p>An ambivert coder who developes crush on every girl he sees</p>
    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>         
    
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Pranath}/>
    <Card.Body>
    <h3>Keshava Pranath K</h3>
    <h6>Popularly known as</h6><Badge variant="info">The unstoppable orator</Badge>
    <p class="w3-opacity"></p>
    <p>An extreme extrovert who will start explaining concepts even if the person listening to him is not interested</p>
    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>         
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top"/>
    <Card.Body>
    <h3>Abhishek S</h3>
    <h6>Popularly known as</h6><Badge variant="info">Boss Ambi</Badge>
    <p class="w3-opacity"></p>
    <p>A Boss personality who can burn each and everyone in the room with just a sentence</p>
    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>         
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Lakshya} />
    <Card.Body>
    <h3>Lakshya Sharma</h3>
    <h6>Popularly known as</h6><Badge variant="info">Genetic algorithm forever</Badge>
    <p class="w3-opacity"></p>
    <p>The Laughing Buddha who solves all the problems in the world with his genetic algorithm</p>
    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>         
    </Card.Body>
    </Card>

    </div>
    </div>
  )
}

export default Team