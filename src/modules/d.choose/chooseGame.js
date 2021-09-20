import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import games from '../../bracket_list.json';
import './chooseGame.css'


/** Render Function **/
function NewChoose() { 

  /** Set the RemainingGames variable that gets updated at the end of each bracket */
  var chosenGame = {}
  if (localStorage.getItem("chosenGame") === null) { 
    chosenGame = games[Math.floor(Math.random() * games.length)]
    console.log('1',chosenGame)
  } else {
    const gameName = JSON.parse(localStorage.getItem("chosenGame")); 
    chosenGame = (games.filter((game) => Object.keys(game)[0] === gameName))[0]
    console.log('2',chosenGame)
    console.log(Object.keys(chosenGame)[0])
  }

  /* Variables from the random game and the nominees */
  const RandomGame = chosenGame; /*console.log(RandomGame)*/
  const GameName = Object.keys(RandomGame)[0]; /*console.log(GameName)*/
  const GameSeeds = Object.values(RandomGame)[0]; /*console.log(SeedList)*/
  const seeds = ['1','8','4','5','2','7','3','6']

/* handleClick function for updating the Round One winners */
  const [winners,setWinners] = useState(['','','','']);
  const [winnerSeeds,setSeeds] = useState(['','','','']);
  const roundOver = ((Object.values(winners).indexOf('') > -1) === false);
  function handleClickR1 (nominee,matchup,seed) {
    const newWinners = winners;
    newWinners[matchup] = nominee;
    const newSeeds = winnerSeeds;
    newSeeds[matchup] = seed;
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
    /* Check if all matchups have a winner selected, reset the list of remaining games */
    const roundOverThree = ((Object.values(winnersThree).indexOf('') > -1) === false);
    if (roundOverThree) {
      localStorage.clear()
    }
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
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[0],0,seeds[0])}>
                  <div className={`seed-label-${(winners[0]===GameSeeds[0])}`}>{seeds[0]}</div>
                  <div className={`seed-descr-${(winners[0]===GameSeeds[0])}`}>{GameSeeds[0]}</div>
                </div>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[1],0,seeds[1])}>
                  <div className={`seed-label-${(winners[0]===GameSeeds[1])}`}>{seeds[1]}</div>
                  <div className={`seed-descr-${(winners[0]===GameSeeds[1])}`}>{GameSeeds[1]}</div>
                </div>
              </div>
              <div className='matchup'>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[2],1,seeds[2])}>
                  <div className={`seed-label-${(winners[1]===GameSeeds[2])}`}>{seeds[2]}</div>
                  <div className={`seed-descr-${(winners[1]===GameSeeds[2])}`}>{GameSeeds[2]}</div>
                </div>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[3],1,seeds[3])}>
                  <div className={`seed-label-${(winners[1]===GameSeeds[3])}`}>{seeds[3]}</div>
                  <div className={`seed-descr-${(winners[1]===GameSeeds[3])}`}>{GameSeeds[3]}</div>
                </div>
              </div>
              <div className='matchup'>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[4],2,seeds[4])}>
                  <div className={`seed-label-${(winners[2]===GameSeeds[4])}`}>{seeds[4]}</div>
                  <div className={`seed-descr-${(winners[2]===GameSeeds[4])}`}>{GameSeeds[4]}</div>
                </div>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[5],2,seeds[5])}>
                  <div className={`seed-label-${(winners[2]===GameSeeds[5])}`}>{seeds[5]}</div>
                  <div className={`seed-descr-${(winners[2]===GameSeeds[5])}`}>{GameSeeds[5]}</div>
                </div>
              </div>
              <div className='matchup'>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[6],3,seeds[6])}>
                  <div className={`seed-label-${(winners[3]===GameSeeds[6])}`}>{seeds[6]}</div>
                  <div className={`seed-descr-${(winners[3]===GameSeeds[6])}`}>{GameSeeds[6]}</div>
                </div>
                <div className={`game-seed`} onClick={() => handleClickR1(GameSeeds[7],3,seeds[7])}>
                  <div className={`seed-label-${(winners[3]===GameSeeds[7])}`}>{seeds[7]}</div>
                  <div className={`seed-descr-${(winners[3]===GameSeeds[7])}`}>{GameSeeds[7]}</div>
                </div>
              </div>
            </div>

            <div className={`game-wrap-2-${roundOver}-${roundOverTwo}`}>
              <div className='matchup'>
                <div className={`game-seed-2`} onClick={() => handleClickR2(winners[0],0,winnerSeeds[0])}>
                  <div className={`seed-label-2-${winnersTwo[0]===winners[0]}`}>{winnerSeeds[0]}</div>
                  <div className={`seed-descr-2-${winnersTwo[0]===winners[0]}`}>{winners[0]}</div>
                </div>
                <div className={`game-seed-2`} onClick={() => handleClickR2(winners[1],0,winnerSeeds[1])}>
                  <div className={`seed-label-2-${winnersTwo[0]===winners[1]}`}>{winnerSeeds[1]}</div>
                  <div className={`seed-descr-2-${winnersTwo[0]===winners[1]}`}>{winners[1]}</div>
                </div>
              </div>
              <div className='matchup'>
                <div className={`game-seed-2`} onClick={() => handleClickR2(winners[2],1,winnerSeeds[2])}>
                  <div className={`seed-label-2-${winnersTwo[1]===winners[2]}`}>{winnerSeeds[2]}</div>
                  <div className={`seed-descr-2-${winnersTwo[1]===winners[2]}`}>{winners[2]}</div>
                </div>
                <div className={`game-seed-2`} onClick={() => handleClickR2(winners[3],1,winnerSeeds[3])}>
                  <div className={`seed-label-2-${winnersTwo[1]===winners[3]}`}>{winnerSeeds[3]}</div>
                  <div className={`seed-descr-2-${winnersTwo[1]===winners[3]}`}>{winners[3]}</div>
                </div>
              </div>
            </div>

            <div className={`game-wrap-3-${roundOverTwo}-${roundOverThree}`}>
              <div className='matchup'>
                <Link to="/choose"  className={`game-seed-3`} onClick={() => handleClickR3(winnersTwo[0],0,winnerSeedsTwo[0])}>
                  <div className={`seed-label-3-${winnersThree[0]===winnersTwo[0]}`}>{winnerSeedsTwo[0]}</div>
                  <div className={`seed-descr-3-${winnersThree[0]===winnersTwo[0]}`}>{winnersTwo[0]}</div>
                </Link>
                <Link to="/choose"  className={`game-seed-3`} onClick={() => handleClickR3(winnersTwo[1],0,winnerSeedsTwo[1])}>
                  <div className={`seed-label-3-${winnersThree[0]===winnersTwo[1]}`}>{winnerSeedsTwo[1]}</div>
                  <div className={`seed-descr-3-${winnersThree[0]===winnersTwo[1]}`}>{winnersTwo[1]}</div>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default NewChoose;