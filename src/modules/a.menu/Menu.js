import React from 'react';
import logo from '../../images/bracket-transparent.PNG';
import './Menu.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <div className="vertical-center">

        <p className="menu-text" id="mt1">
          The Bracket Game
        </p>

        <img src={logo} className="menu-logo" alt="logo" />

        <p className="menu-text" id="mt2">
          Select Game Type
        </p>

        <Link to="/random">
        <button className="menu-button">
          <p>RANDOM</p>
        </button>
        </Link>

        <Link to="/creategame">
        <button className="menu-button">
          <p>CREATE</p>
        </button>
        </Link>

        <Link to="/choose">
        <button className="menu-button">
          <p>CHOOSE</p>
        </button>        
        </Link>               

      </div>
    </div>
  );
}

export default Menu;
