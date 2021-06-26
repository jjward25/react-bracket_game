import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'
import './random.css'

const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)];
//let game_data = Object.values(randomGame);
//let noms = game_data.filter(data => data != randomGame.category && data != randomGame.status)
const seeds = ['1','8','4','5','2','7','3','6'];


function RandomR1 (props) {
    const [state, setState] = useState({
        seed1: randomGame.seed1,
        status1: props.status1,
        seed2: randomGame.seed2,
        status2: props.status2,
        seed3: randomGame.seed3,
        status3: props.status3,
        seed4: randomGame.seed4,
        status4: props.status4,
        seed5: randomGame.seed5,
        status5: props.status5,
        seed6: randomGame.seed6,
        status6: props.status6,
        seed7: randomGame.seed7,
        status7: props.status7,
        seed8: randomGame.seed8,
        status8: props.status8
    })

    function selectNom1(e) {
        console.log(e)
        
    };

    return (
        <div className="menu">
            <div className="vertical-center">
                
            <div className="nominee-title" id="mt2">
                Category: {randomGame.category}
            </div>

            <div className="random-rd1" id={state.status1} onClick={selectNom1("status1")}>
                <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[0]}</p>
                <p>{state.seed1}</p>
                </div>
            </div>

            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[1]}</p>
                <p>{randomGame.seed2}</p>
            </div>

            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[2]}</p>
                <p>{randomGame.seed3}</p>
            </div>

            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[3]}</p>
                <p>{randomGame.seed4}</p>
            </div>

            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[4]}</p>
                <p>{randomGame.seed5}</p>
            </div>


            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[5]}</p>
                <p>{randomGame.seed6}</p>
            </div>

            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[6]}</p>
                <p>{randomGame.seed7}</p>
            </div>

            <div className="nom-rd1">
                <p id="random-rd1-seed">{seeds[7]}</p>
                <p>{randomGame.seed8}</p>
            </div>

            </div>
        </div>    
)};

export default RandomR1;
