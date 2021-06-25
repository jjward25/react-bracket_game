import React from 'react';
import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'
import './random.css'


const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)];
let noms = Object.values(randomGame);
noms = noms.filter(nom => nom != randomGame.category)
const seeds = ['1','8','4','5','2','7','3','6']

console.log(randomGame)
console.log(noms)

function RandomRd1() {  
return (
    <div className="menu">
        <div className="vertical-center">
               
        <div className="nominee-title" id="mt2">
            Category: {randomGame.category}
        </div>

        <div>
            <ul className="random-rd1">

                {noms.map((nom, index) => {
                    
                    return  <li className="nom-rd1" key={index}>
                                <p id="random-rd1-seed">{seeds[index]}</p>
                                <p>{nom}</p>
                            </li>;
                })}
            </ul>
        </div>

        </div>
    </div>    
)};

export default RandomRd1;
