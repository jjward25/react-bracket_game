import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/bracket-transparent.PNG';
import games from '../../bracket_list.json'
import './choose.css';


console.log(games)


function Choosegame() {  
return (
    <div className="Menu">
        <div className="vertical-center">
        <Link to="/">
            <p className="title-text">
             The Bracket Game
            </p>
        </Link>
          
        <img src={logo} className="menu-logo" alt="logo" />
          
        <div className="nominee-title" id="mt2">
            Nominees 
        </div>

        <div>
            <ul className="choose-game-list">
                {games.main_game_list.map(game => {
                    return <li className="choose-game-category-title">{game.category}</li>;
                })}
            </ul>
        </div>

        </div>
    </div>    
)};

export default Choosegame;
