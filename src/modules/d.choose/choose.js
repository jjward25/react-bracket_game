import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/bracket-transparent.PNG';
import games from '../../bracket_list.json'
import './choose.css';


function Choosegame() {  

    function startGame(category) {
        console.log(category)
        localStorage.setItem("chosenGame", JSON.stringify(category));
        console.log(JSON.parse(localStorage.getItem("chosenGame")))
    }

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
                    return <Link style= {{ textDecoration: 'none' }} to='/choosegame' className="choose-game-category-title" onClick={() => startGame(Object.keys(game)[0])}>
                                {Object.keys(game)[0].toUpperCase()}
                            </Link>;
                })}
            </ul>
        </div>
    </div>)
};

export default Choosegame;
