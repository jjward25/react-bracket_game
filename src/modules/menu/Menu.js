import React from 'react';
import logo from './bracket-colored.png';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <img src={logo} className="Menu-logo" alt="logo" />
      <p>
        Select Game Type
        </p>
      <button className="Menu-button" id="b1">
        <p id="button">RANDOM</p>
      </button>
      <button className="Menu-button" id="b2">
        <p id="button">CHOOSE</p>
      </button>
      <button className="Menu-button" id="b3">
        <p id="button">CREATE</p>
      </button>

    </div>
  );
}

export default Menu;
