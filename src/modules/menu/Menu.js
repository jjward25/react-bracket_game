import React from 'react';
import logo from './bracket-colored.png';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <div className="vertical-center">
        <p className="Menu-text" id="mt1">
          The Bracket Game
        </p>
        <img src={logo} className="Menu-logo" alt="logo" />
        <p className="Menu-text" id="mt2">
          Select Game Type
        </p>
        <button className="Menu-button" id="b1">
          <p id="button">CREATE</p>
        </button>
        <button className="Menu-button" id="b2">
          <p id="button">RANDOM</p>
        </button>
        <button className="Menu-button" id="b3">
          <p id="button">CHOOSE</p>
        </button>
      </div>
    </div>
  );
}

export default Menu;
