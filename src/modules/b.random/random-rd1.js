import React from 'react';
import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'


const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)]
const seeds = Object.values(randomGame);
console.log(randomGame)
console.log(seeds)

function RandomRd1() {  
return (
    <div className="menu">
        <div className="vertical-center">
               
        <div className="nominee-title" id="mt2">
            Category: {randomGame.category}
        </div>

        <div id="mt2">
            Nominees
        </div>

        <div>
            <ul className="random-rd1">

                {seeds.map((seed, index) => {
                    
                    return  <li className="nom-rd1" key={index} style= {{ textDecoration: 'none' }} >
                                <p>{seed}</p>
                            </li>;
                })}
            </ul>
        </div>


        </div>
    </div>    
)};

export default RandomRd1;
