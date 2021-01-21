import React from 'react';
import './roundone.css';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';

function Roundone() {
    return (
      <div className="Menu">
        <div className="vertical-center">
  
          <Link to="/">
            <p className="title-text">
             The Bracket Game
            </p>
          </Link>

          <img src={logo} className="menu-logo" alt="logo" />
  
          <div className="nominee" id="roundone">
            Nominee Objects
          </div>   
  
        </div>
      </div>
    );
  }
  
  export default Roundone;