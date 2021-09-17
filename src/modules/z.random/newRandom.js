import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import games from './bracket_list.json';
import './newRandom.css'

/* Variables from the random game and the nominees */
const RandomGame = games[Math.floor(Math.random() * games.length)]; /*console.log(RandomGame)*/
console.log(RandomGame)
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
/* handleClick function for updating the Round One winners */
const [winners,setWinners] = useState(['','','','']);
const [winnerSeeds,setSeeds] = useState(['','','','']);
const roundOver = ((Object.values(winners).indexOf('') > -1) === false);
function handleClickR1 (nominee,matchup,seed) {
  const newWinners = winners;
  newWinners[matchup] = nominee;
  const newSeeds = winnerSeeds;
  newSeeds[matchup] = seed;
  console.log(seed)
  setWinners({
    ...winners,
    ...newWinners
  })
  setSeeds({
    ...winnerSeeds,
    ...newSeeds
  })
  console.log(winnerSeeds)
  /* Check if all matchups have a winner selected */
  const roundOver = ((Object.values(winners).indexOf('') > -1) === false);
  if (roundOver) {
    console.log('Round One Complete!')
  }
  return
}

/* handleClick function for updating the Round Two winners */
const [winnersTwo,setWinnersTwo] = useState(['','']);
const [winnerSeedsTwo,setSeedsTwo] = useState(['','']);
const roundOverTwo = ((Object.values(winnersTwo).indexOf('') > -1) === false);
function handleClickR2 (nominee,matchup,seed) {
  const newWinnersTwo = winnersTwo;
  newWinnersTwo[matchup] = nominee;
  const newSeedsTwo = winnerSeedsTwo;
  newSeedsTwo[matchup] = seed;
  console.log(seed)
  setWinnersTwo({
    ...winnersTwo,
    ...newWinnersTwo
  })
  setSeedsTwo({
    ...winnerSeedsTwo,
    ...newSeedsTwo
  })
  console.log(winnerSeedsTwo)
  /* Check if all matchups have a winner selected */
  const roundOverTwo = ((Object.values(winnersTwo).indexOf('') > -1) === false);
  if (roundOverTwo) {
    console.log('Round Two Complete!')
  }
  return
}

/* handleClick function for updating the Final Round winners */
const [winnersThree,setWinnersThree] = useState(['']);
const [winnerSeedsThree,setSeedsThree] = useState(['']);
const roundOverThree = ((Object.values(winnersThree).indexOf('') > -1) === false);
function handleClickR3 (nominee,matchup,seed) {
  const newWinnersThree = winnersThree;
  newWinnersThree[matchup] = nominee;
  setWinnersThree({
    ...winnersThree,
    ...newWinnersThree
  })
  const newSeedsThree = newWinnersThree;
  newSeedsThree[matchup] = seed;
  setSeedsThree({
    ...winnerSeedsThree,
    ...newSeedsThree
  })
  /* Check if all matchups have a winner selected */
  const roundOverThree = ((Object.values(winnersThree).indexOf('') > -1) === false);
  if (roundOverThree) {
    console.log('Game Complete!')
    window.location.reload(false);
  }
  return
}



return (
    <div className="wrapper">
      <div className="vertical-center">

        <div className='game-header'>
          <Link to="/" className="title-text">
              The Bracket Game
          </Link>
          <img src='https://i.imgur.com/qXF14ee.png' className="game-logo" alt="logo" />
          <p className='instructions'>
            Debate the best, or the worst...
          </p>
          <div className="nominee-title">
            {GameName}
          </div>
        </div>

        <div className='game-outer-wrap'>
          <div className={`game-wrap-${roundOver}`}>
            <div className='matchup'>
              <div className={`game-seed-${(winners[0]===GameSeeds[0])}`} onClick={() => handleClickR1(GameSeeds[0],0,seeds[0])}>
                <div className='seed-label'>{seeds[0]}</div>
                <div className='seed-descr'>{GameSeeds[0]}</div>
              </div>
              <div className={`game-seed-${(winners[0]===GameSeeds[1])}`} onClick={() => handleClickR1(GameSeeds[1],0,seeds[1])}>
                <div className='seed-label'>{seeds[1]}</div>
                <div className='seed-descr'>{GameSeeds[1]}</div>
              </div>
            </div>
            <div className='matchup'>
              <div className={`game-seed-${(winners[1]===GameSeeds[2])}`} onClick={() => handleClickR1(GameSeeds[2],1,seeds[2])}>
                <div className='seed-label'>{seeds[2]}</div>
                <div className='seed-descr'>{GameSeeds[2]}</div>
              </div>
              <div className={`game-seed-${(winners[1]===GameSeeds[3])}`} onClick={() => handleClickR1(GameSeeds[3],1,seeds[3])}>
                <div className='seed-label'>{seeds[3]}</div>
                <div className='seed-descr'>{GameSeeds[3]}</div>
              </div>
            </div>
            <div className='matchup'>
            <div className={`game-seed-${(winners[2]===GameSeeds[4])}`} onClick={() => handleClickR1(GameSeeds[4],2,seeds[4])}>
                <div className='seed-label'>{seeds[4]}</div>
                <div className='seed-descr'>{GameSeeds[4]}</div>
              </div>
              <div className={`game-seed-${(winners[2]===GameSeeds[5])}`} onClick={() => handleClickR1(GameSeeds[5],2,seeds[5])}>
                <div className='seed-label'>{seeds[5]}</div>
                <div className='seed-descr'>{GameSeeds[5]}</div>
              </div>
            </div>
            <div className='matchup'>
            <div className={`game-seed-${(winners[3]===GameSeeds[6])}`} onClick={() => handleClickR1(GameSeeds[6],3,seeds[6])}>
                <div className='seed-label'>{seeds[6]}</div>
                <div className='seed-descr'>{GameSeeds[6]}</div>
              </div>
              <div className={`game-seed-${(winners[3]===GameSeeds[7])}`} onClick={() => handleClickR1(GameSeeds[7],3,seeds[7])}>
                <div className='seed-label'>{seeds[7]}</div>
                <div className='seed-descr'>{GameSeeds[7]}</div>
              </div>
            </div>
          </div>


          <div className={`game-wrap-2-${roundOver}-${roundOverTwo}`}>
            <div className='matchup'>
              <div className={`game-seed-${winnersTwo[0]===winners[0]}`} onClick={() => handleClickR2(winners[0],0,winnerSeeds[0])}>
                <div className='seed-label'>{winnerSeeds[0]}</div>
                <div className='seed-descr'>{winners[0]}</div>
              </div>
              <div className={`game-seed-${winnersTwo[0]===winners[1]}`} onClick={() => handleClickR2(winners[1],0,winnerSeeds[1])}>
                <div className='seed-label'>{winnerSeeds[1]}</div>
                <div className='seed-descr'>{winners[1]}</div>
              </div>
            </div>
            <div className='matchup'>
              <div className={`game-seed-${winnersTwo[1]===winners[2]}`} onClick={() => handleClickR2(winners[2],1,winnerSeeds[2])}>
                <div className='seed-label'>{winnerSeeds[2]}</div>
                <div className='seed-descr'>{winners[2]}</div>
              </div>
              <div className={`game-seed-${winnersTwo[1]===winners[3]}`} onClick={() => handleClickR2(winners[3],1,winnerSeeds[3])}>
                <div className='seed-label'>{winnerSeeds[3]}</div>
                <div className='seed-descr'>{winners[3]}</div>
              </div>
            </div>
          </div>


          <div className={`game-wrap-3-${roundOverTwo}-${roundOverThree}`}>
            <div className='matchup'>
              <div className={`game-seed-${winnersThree[0]===winnersTwo[0]}`} onClick={() => handleClickR3(winnersTwo[0],0,winnerSeedsTwo[0])}>
                <div className='seed-label'>{winnerSeedsTwo[0]}</div>
                <div className='seed-descr'>{winnersTwo[0]}</div>
              </div>
              <div className={`game-seed-${winnersThree[0]===winnersTwo[1]}`} onClick={() => handleClickR3(winnersTwo[1],0,winnerSeedsTwo[1])}>
                <div className='seed-label'>{winnerSeedsTwo[1]}</div>
                <div className='seed-descr'>{winnersTwo[1]}</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default NewRandom;