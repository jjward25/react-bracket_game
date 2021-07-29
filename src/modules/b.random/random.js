import React, { useState, useEffect } from 'react';
import logo from '../../images/bracket-transparent.PNG';
import {Link} from 'react-router-dom';
//import main_game_list from '../../bracket_list.json';
import RandomRd1 from './random-rd1';

const getList = (index) => Array([8, 4, 2, 1][index]).fill(index === 3);

/* Rendered Component */
function Random() {  
  const [activeList, setActiveList] = useState([getList(0)]);

  useEffect(() => {
    const selected = activeList[activeList.length - 1].filter(Boolean);

    if (selected.length === [4, 2, 1][activeList.length - 1] && activeList.length < 4) {
      console.log('You have selected the 4 values, now we have to do something');
      setActiveList([ ...activeList, getList(activeList.length) ]);
    }
  }, [activeList])


  const handleSetActive = (index, newActive) => {
    activeList[index] = newActive;
    setActiveList([ ...activeList ]);
  }

  return (
      <div className="menu">
        <div className="vertical-center">
          
          <Link to="/">
            <p className="title-text">
             The Bracket Game
            </p>
          </Link>
          
          <img src={logo} className="menu-logo" alt="logo" />
          <div style={{ display: 'flex' }}>
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

