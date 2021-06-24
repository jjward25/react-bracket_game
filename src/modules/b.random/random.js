import React from 'react';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';
import main_game_list from '../../bracket_list.json'
console.log(main_game_list)



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
          
          <div className="nominee-title" id="roundone">
            Nominees
          </div>

        </div>
      </div>
    );
  }

export default random;

