import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/bracket-transparent.PNG';
import games from '../../bracket_list.json'
import './choose.css';


function Choosegame() {  
return (
    <div className="choose-game">
        <div className="choose-center">
        <Link to="/">
            <p className="choose-title-text">
             The Bracket Game
            </p>
        </Link>
          
        <img src={logo} className="choose-logo" alt="logo" />
        
        <ul className="choose-game-list">
                {games.map((game) => {
                    let game_path = '/' + Object.keys(game)[0].replace(/[^a-zA-Z ]/g, "").toLowerCase().replaceAll(" ","-")
                    return <Link style= {{ textDecoration: 'none' }} to={game_path} className="choose-game-category-title">{Object.keys(game)[0].toUpperCase()}</Link>;
                })}
        </ul>

        </div>
    </div>    
)};

export default Choosegame;
