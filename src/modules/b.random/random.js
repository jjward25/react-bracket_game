import React, { useState, useEffect } from 'react';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';
import {RandomRd1, categoryTitle} from './random-game';

const getList = (index) => Array([8, 4, 2, 1][index]).fill(index === 3);  // creates an array of the length specified by the index position and fills it with false values

/* Rendered Component */
function Random() {  
  const [activeList, setActiveList] = useState([getList(0)]); // activeList is an arracy with one array inside of it.  activeList[0] as defined here is 8 false values in an array, based 
                                                             // on the first value from the array above. This array gets updated with each click, where the index position clicked gets 
                                                            // flipped from False to True, then when 4 trues are selected a new array of 4 falses is created at activeList[1], and so on.
  
  useEffect(() => {
    const selected = activeList[activeList.length - 1].filter(Boolean);  // creates new variable "selected" that counts the number of selected values

    if (selected.length === [4, 2, 1][activeList.length - 1] && activeList.length < 4) {  // If we're on the first round, activeList.length will still be 1 (the first array of 8 falses)
      console.log('You have selected the 4 values, now we have to do something');        // so for the first round this checks if there's been 4 selected, and if so sets ActiveList to 
      setActiveList([ ...activeList, getList(activeList.length) ]);                     // the next index value (in this case activeList[1] instead of 0). 
    }                                                                                  // The initial IF statement also limits the game to 4 rounds, only checking if the length remains below 4
  }, [activeList])                                                                    // For the next round, activeList will have a length of 2 arrays, so it will look for select.length
                                                                                     // to equal 2, and then set activeList to activeList[2].

  const handleSetActive = (index, newActive) => {
    activeList[index] = newActive;  // sets the value at that index position to active
    setActiveList([ ...activeList ]); //sets ActiveList equal to a new array with the updated values from activeList (you need to declare a new array "...activeList" instead of "activeList" so react rerenders and saves the update)
  }

  return (
      <div className="wrapper">
        <div className="vertical-center">
          
          <Link to="/">
            <p className="title-text">
             The Bracket Game
            </p>
          </Link>
          
          <img src={logo} className="game-logo" alt="logo" />
          
          <p className='instructions'>
          Debate the best, or the worst...  Selecting the last matchup winner ends each round.
          </p>
          
          <div className="nominee-title" id="mt2">
                Category: {categoryTitle}
          </div>

          <div className='game-wrap'>
            {activeList.map((active, index) => (
              <RandomRd1
                key={index}
                index={index}
                active={active}
                activeList={activeList}
                setActive={handleSetActive.bind(null, index)} />
              ))}
          </div>
        </div>
      </div>
    );
  }

export default Random;

