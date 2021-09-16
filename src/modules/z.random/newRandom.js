import React from 'react';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';
import games from './bracket_list.json';
import './newRandom.css'

const RandomGame = games[Math.floor(Math.random() * games.length)]; /*console.log(RandomGame)*/
const GameName = Object.keys(RandomGame)[0]; /*console.log(GameName)*/
const SeedList = Object.values(RandomGame)[0]; /*console.log(SeedList)*/
const seeds = ['1','8','4','5','2','7','3','6']

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

/* handleClick function for updating the chosen winners */
const winners = {'1':'','2':'','3':'','4':''};
function handleClick (nominee,pairs) {
  winners[pairs] = nominee
  console.log(winners)

  const roundOver = ((Object.values(winners).indexOf('') > -1) === false);
  console.log(roundOver)
  if (roundOver) {
    console.log('Round One Complete!')
  }
  return
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
          Debate the best, or the worst...
        </p>
        
        <div className="nominee-title" id="mt2">
          Category: {GameName}
        </div>

        <div className='game-wrap'>
          <div className='matchup'>
            <div className={`game-seed-${(winners['1']===GameSeeds[0])}`} onClick={() => handleClick(GameSeeds[0],1)}>
              <div className='seed-label'>{seeds[0]}</div>
              <div className='seed-descr'>{GameSeeds[0]}</div>
            </div>
            <div className={`game-seed`} onClick={() => handleClick(GameSeeds[1],1)}>
              <div className='seed-label'>{seeds[1]}</div>
              <div className='seed-descr'>{GameSeeds[1]}</div>
            </div>
          </div>

          <div className='matchup'>
            <div className='game-seed' onClick={() => handleClick(GameSeeds[2],2)}>
              <div className='seed-label'>{seeds[2]}</div>
              <div className='seed-descr'>{GameSeeds[2]}</div>
            </div>
            <div className='game-seed' onClick={() => handleClick(GameSeeds[3],2)}>
              <div className='seed-label'>{seeds[3]}</div>
              <div className='seed-descr'>{GameSeeds[3]}</div>
            </div>
          </div>

          <div className='matchup'>
            <div className='game-seed' onClick={() => handleClick(GameSeeds[4],3)}>
              <div className='seed-label'>{seeds[4]}</div>
              <div className='seed-descr'>{GameSeeds[4]}</div>
            </div>
            <div className='game-seed' onClick={() => handleClick(GameSeeds[5],3)}>
              <div className='seed-label'>{seeds[5]}</div>
              <div className='seed-descr'>{GameSeeds[5]}</div>
            </div>
          </div>

          <div className='matchup'>
            <div className='game-seed' onClick={() => handleClick(GameSeeds[6],4)}>
              <div className='seed-label'>{seeds[6]}</div>
              <div className='seed-descr'>{GameSeeds[6]}</div>
            </div>
            <div className='game-seed' onClick={() => handleClick(GameSeeds[7],4)}>
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