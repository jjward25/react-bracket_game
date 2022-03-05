import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const randomColors = ["steelblue", "salmon", "purple"];
  const styleObj = {
    border: "1px solid",
    borderColor:
      randomColors[Math.floor(Math.random() * randomColors.length)].toString(),
  };

  return (
    <div className="menu">
      <div className="menu-center">
        <Link to="/">
          <p className="menu-text" id="mt1">
            The Bracket Game
          </p>
        </Link>

        <img
          src="https://i.imgur.com/cFmxw5t.png"
          className="menu-logo"
          alt="logo"
        />

        <p className="menu-text" id="mt2">
          Debate the best or worst of anything in tournament format
        </p>

        <Link to="/random" className="menu-button" style={styleObj}>
          <p>RANDOM</p>
        </Link>

        <Link to="/creategame" className="menu-button" style={styleObj}>
          <p>CREATE</p>
        </Link>

        <Link to="/choose" className="menu-button" style={styleObj}>
          <p>CHOOSE</p>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
