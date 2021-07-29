import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'
import './random.css'


const seeds = ['1','8','4','5','2','7','3','6'];
const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)];
//console.log(randomGame.seed1)

let noms = Object.values(randomGame)
//console.log(noms)
//console.log(noms[0])

const nl = noms.map(nom => Object.values(nom))
console.log(nl)
//console.log(nl[0][0])

// REWRITE TO HAVE CONST OBJECT FOR EACH NOM, JUST SEEMS EASIER TO CALL THE OBJECT.STATUS AND UPDATE THAT IN THE TABLE?? MIGHT NOT BE THE PROBLEM THOUGH
// BIGGER PROBLEM COULD BE PERSISTING THE INITITAL NOM DATA

function RandomR1 (props) {
    const [state, setState] = useState({
        nom1: nl[0][0],
        status1: nl[0][1],
        nom2: nl[1][0],
        status2: nl[1][1],
        nom3: nl[2][0],
        status3: nl[2][1],
        nom4: nl[3][0],
        status4: nl[3][1],
        nom5: nl[4][0],
        status5: nl[4][1],
        nom6: nl[5][0],
        status6: nl[5][1],
        nom7: nl[6][0],
        status7: nl[6][1],
        nom8: nl[7][0],
        status8: nl[7][1],
    })

    function selectNom(e) {
        console.log(e)
        if (state.e = 'active'){
            setState({e:'selected'})
        }  setState({e: 'active'})
        console.log(state.e)
    };

    return (
        <div className="menu">
            <div className="vertical-center">
                
            <div className="nominee-title" id="mt2">
                Category: {randomGame.category}
            </div>

            <div className="random-rd1" id={state.status1}>
                <div className="nom-rd1" onClick={() => {
                    if (state.status1 = 'active') {
                        setState({status1:'selected'})
                    } setState({status1: 'active'})}}>
                <p id="random-rd1-seed">{seeds[0]}</p>
                <p>{state.nom1}</p>
                </div>
            </div>

            <div className="nom-rd1" id={state.status2}>
                <p id="random-rd1-seed">{seeds[1]}</p>
                <p>{state.nom2}</p>
            </div>

            <div className="nom-rd1" id={state.status3}>
                <p id="random-rd1-seed">{seeds[2]}</p>
                <p>{state.nom3}</p>
            </div>

            <div className="nom-rd1" id={state.status4}>
                <p id="random-rd1-seed">{seeds[3]}</p>
                <p>{state.nom4}</p>
            </div>

            <div className="nom-rd1" id={state.status5}>
                <p id="random-rd1-seed">{seeds[4]}</p>
                <p>{state.nom5}</p>
            </div>

            <div className="nom-rd1" id={state.status6}> 
                <p id="random-rd1-seed">{seeds[5]}</p>
                <p>{state.nom6}</p>
            </div>

            <div className="nom-rd1" id={state.status7}>
                <p id="random-rd1-seed">{seeds[6]}</p>
                <p>{state.nom7}</p>
            </div>

            <div className="nom-rd1" id={state.status8}>
                <p id="random-rd1-seed">{seeds[7]}</p>
                <p>{state.nom8}</p>
            </div> 
            {console.log(state.status1)}

            </div>
        </div>    
)};

export default RandomR1;
