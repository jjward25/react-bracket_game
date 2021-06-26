import React from 'react';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';
//import main_game_list from '../../bracket_list.json';
import RandomRd1 from './random-rd1';
import RandomR1 from './random-r1';


/* Rendered Component */
function random() {  
  
  return (
      <div className="menu">
        <div className="vertical-center">
          
          <Link to="/">
            <p className="title-text">
             The Bracket Game
            </p>
          </Link>
          
          <img src={logo} className="menu-logo" alt="logo" />

          <RandomR1></RandomR1>

        </div>
      </div>
    );
  }

export default random;

