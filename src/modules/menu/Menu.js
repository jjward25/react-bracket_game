import React from 'react';
import logo from '../../images/bracket-transparent.PNG';
import './Menu.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      <div className="vertical-center">

        <p className="Menu-text" id="mt1">
          The Bracket Game
        </p>

        <img src={logo} className="menu-logo" alt="logo" />

        <p className="Menu-text" id="mt2">
          Select Game Type
        </p>

        <Link to="/roundone">
        <button className="Menu-button" id="b2">
          <p id="button">RANDOM</p>
        </button>
        </Link>

        <Link to="/creategame">
        <button className="Menu-button" id="b1">
          <p id="button">CREATE</p>
        </button>
        </Link>

                
        <button className="Menu-button" id="b3">
          <p id="button">CHOOSE</p>
        </button>        

      </div>
    </div>
  );
}

export default Menu;
