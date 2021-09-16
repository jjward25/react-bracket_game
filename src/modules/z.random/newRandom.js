import React, { useState } from 'react';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';
import games from './bracket_list.json';
import './newRandom.css'

const RandomGame = games[Math.floor(Math.random() * games.length)];
const GameName = Object.keys(RandomGame)[0];
const SeedList = Object.values(RandomGame)[0];
const seeds = ['1','8','4','5','2','7','3','6']
/*console.log(RandomGame)
console.log(GameName)
console.log(SeedList)*/

/*Shuffles the SeedList array into a new GameSeeds array to be displayed */
function randomArrayShuffle(SeedList) {
  var currentIndex = SeedList.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = SeedList[currentIndex];
    SeedList[currentIndex] = SeedList[randomIndex];
    SeedList[randomIndex] = temporaryValue;
  }
  return SeedList;
}
const GameSeeds = randomArrayShuffle(SeedList)


/** Render Function **/
function NewRandom() { 

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
          Category: {GameName}
        </div>

        <div className='game-wrap'>

          <div className='matchup'>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[0]}</div>
              <div className='seed-descr'>{GameSeeds[0]}</div>
            </div>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[1]}</div>
              <div className='seed-descr'>{GameSeeds[1]}</div>
            </div>
          </div>

          <div className='matchup'>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[2]}</div>
              <div className='seed-descr'>{GameSeeds[2]}</div>
            </div>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[3]}</div>
              <div className='seed-descr'>{GameSeeds[3]}</div>
            </div>
          </div>

          <div className='matchup'>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[4]}</div>
              <div className='seed-descr'>{GameSeeds[4]}</div>
            </div>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[5]}</div>
              <div className='seed-descr'>{GameSeeds[5]}</div>
            </div>
          </div>

          <div className='matchup'>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[6]}</div>
              <div className='seed-descr'>{GameSeeds[6]}</div>
            </div>
            <div className='game-seed'>
              <div className='seed-label'>{seeds[7]}</div>
              <div className='seed-descr'>{GameSeeds[7]}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default NewRandom;