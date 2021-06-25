import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/bracket-transparent.PNG';
import games from '../../bracket_list.json'
import './choose.css';


function Choosegame() {  
return (
    <div className="menu">
        <div className="vertical-center">
        <Link to="/">
            <p className="title-text">
             The Bracket Game
            </p>
        </Link>
          
        <img src={logo} className="menu-logo" alt="logo" />
          
        <div className="menu-text" id="mt2">
            Categories 
        </div>
        
        <div>
            <ul className="choose-game-list">
                {games.main_game_list.map(game => {
                    let game_path = '/' + game.category.replace(/[^a-zA-Z ]/g, "").toLowerCase().replaceAll(" ","-")
                    return <Link style= {{ textDecoration: 'none' }} to={game_path}><li className="choose-game-category-title"><p>{game.category.toUpperCase()}</p></li></Link>;
                })}
            </ul>
        </div>

        </div>
    </div>    
)};

export default Choosegame;
