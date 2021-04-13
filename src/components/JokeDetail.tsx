import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JokeDetail = (props:{children: never[]; joke:string}) => {
  
    return (
        <Jumbotron>
        <p className="textJoke">
         {props.joke}
        </p>
        <nav className="rtn"><Link to="/"><span>Volver</span> </Link ></nav>
      </Jumbotron>
    )
   

}
 
export default JokeDetail