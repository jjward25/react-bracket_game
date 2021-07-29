import React from 'react';
//import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'
import './random.css'

const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)];
let game_data = Object.values(randomGame);
const seeds = ['1','8','4','5','2','7','3','6']
/** Need to account for the Seed already being in the object.  Right now it's creating a list of objects, which I guess is a no. */
console.log(randomGame.seed)  
console.log(game_data)

function RandomRd1() {  
return (
    
    <div className="menu">
        <div className="vertical-center">
               
        <div className="nominee-title" id="mt2">
            Category: {randomGame.category}
        </div>

        <div>
            <ul className="random-rd1">
                {game_data.map((data,index) => {

                    if (data !== randomGame.category && data !== randomGame.status) {

                        return  <li className="nom-rd1" key={index}>
                                    <p id="random-rd1-seed">{seeds[index]}</p>
                                    <p>{data}</p>
                                </li>;
                    }    })}                
            </ul>
        </div>

        </div>
    </div>    
)};

export default RandomRd1;
