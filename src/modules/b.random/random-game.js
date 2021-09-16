import React from 'react';
//import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'
import './random.css'

const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)];
const seeds = ['1','8','4','5','2','7','3','6']
const categoryTitle = randomGame.category;

// Randomize seeds adding initial index position
randomGame.seeds = seeds.map(seed => randomGame.seeds[seed - 1]);

function RandomRd1({ active, setActive, activeList, index: activeListIndex }) {  // Active is an array of 8 "false" booleans. ActiveList is a list of arrays.  First an array of 8 booleans, then 4, then 2, then 1.
    

    const handleClick = (index) => {
        const even = index % 2 === 1;
        const isActive = active[index]; //  pulls the value from this place in the active array, returning a true/false boolean on if this seed/index value is active

        active[index] = !active[index];  //swaps the current state

        //Only one of the pair can be Active (ie: for even, makes sure the previous was not active also)
        if (!isActive) {
            if (even) {
                active[index - 1] = false;
            } else {
                active[index + 1] = false;
            }
        }
        setActive([...active]);  // this creates a new array (that's a copy but different).  This makes it so react will re-render.  Updating the state directly does not re-render the state so setActive(active) would not save changes on the page
                                
    };

    let filteredSeeds = randomGame.seeds; 
    // for loop checks that i only iterates up to the activelist length
    for (let i = 1; i <= activeListIndex; i++) {
        filteredSeeds = filteredSeeds
            .filter((seeds, seedIndex) => activeList[i - 1][seedIndex]);  // creates a new array of the selected "active" items
    }
    
    //console.log({active, activeList}) // Active is an array of 8 "false" booleans. ActiveList is a list of arrays.  First an array of 8 booleans, then 4, then 2, then 1.
    //console.log({filteredSeeds})  // filtered seeds is the seed objects ( {seed: "value",status:"active"}) // gets filtered to the 4 winners once all 4 are selected
    
    // google "classnames npm" to learn about the classname object used below
    return (
        
            <div className="vertical-center">
                
            <div>
                <ul className="random-rd1">
                    {filteredSeeds.map(({ seed, status }, index) => {
                        const className = active[index] ? ' active' : ''
                        return  (
                            <li className={`nom-rd1${className}`} key={seed} onClick={() => (activeListIndex === activeList.length - 1) && handleClick(index)}>
                                <p id="random-rd1-seed">{seeds[index]}</p>
                                <p>{seed}</p>
                            </li>
                        );
                    })}                
                </ul>
            </div>

            </div>
        
    )
};

export {RandomRd1, categoryTitle}