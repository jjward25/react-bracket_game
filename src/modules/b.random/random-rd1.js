import React from 'react';
//import {Link} from 'react-router-dom';
import games from '../../bracket_list.json'
import './random.css'

const randomGame = games.main_game_list[Math.floor(Math.random() * games.main_game_list.length)];
// let game_data = Object.values(randomGame);
const seeds = ['1','8','4','5','2','7','3','6']
/** Need to account for the Seed already being in the object.  Right now it's creating a list of objects, which I guess is a no. */
// console.log(randomGame.seed)  
// console.log(game_data)

// Randomize seeds adding initial index position
randomGame.seeds = seeds.map(seed => randomGame.seeds[seed - 1]);

console.log(randomGame.seeds)

function RandomRd1({ active, setActive, activeList, index: activeListIndex }) {
    const handleClick = (index) => {
        const even = index % 2 === 1;
        const isActive = active[index];

        // Update clicked element
        active[index] = !active[index];   //swaps the state

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

    const filteredSeeds = randomGame.seeds.filter((seeds, seedIndex) => activeListIndex === 0 || activeList[activeListIndex - 1][seedIndex]);
    
    console.log({active, activeList})
    console.log({filteredSeeds})
    // classnames npm

    return (
        <div className="menu">
            <div className="vertical-center">
                
            <div className="nominee-title" id="mt2">
                Category: {randomGame.category}
            </div>

            <div>
                <ul className="random-rd1">
                    {filteredSeeds.map(({ seed, status }, index) => {
                        return  (
                        <li className={`nom-rd1${active[index] ? ' active' : ''}`} key={seed} onClick={() => (activeListIndex === activeList.length - 1) && handleClick(index)}>
                            <p id="random-rd1-seed">{seeds[index]}</p>
                            <p>{seed} {status}</p>
                        </li>);
                    })}                
                </ul>
            </div>

            </div>
        </div>    
    )
};

export default RandomRd1;
