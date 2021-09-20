import React from 'react';
import logo from '../../images/bracket-transparent.PNG';
import './Menu.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <div className="menu-center">

        <p className="menu-text" id="mt1">
          The Bracket Game
        </p>

        <img src={logo} className="menu-logo" alt="logo" />
        
        <p className="menu-text" id="mt2">
          Select Game Type
        </p>

        <Link to="/random" className="menu-button">
          <p>RANDOM</p>
        </Link>

        <Link to="/creategame"  className="menu-button">
          <p>CREATE</p>
        </Link>

        <Link to="/choose" className="menu-button">
          <p>CHOOSE</p>
        </Link>               

      </div>
    </div>
  );
}

export default Menu;
