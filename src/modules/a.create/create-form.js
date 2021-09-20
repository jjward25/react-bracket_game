import React, { useState } from 'react';
import './create-form.css';
import {Link} from 'react-router-dom';

function UserGame () {
    const randomColors = ['steelblue','seagreen','darkkhaki']
    const styleObj = {
      color: randomColors[Math.floor(Math.random()*randomColors.length)].toString()
    }

    const [userGame, setUserGame] =  {
        seed1: props.seed1,
        seed2: props.seed2,
        seed3: props.seed3,
        seed4: props.seed4,
        seed5: props.seed5,
        seed6: props.seed6,
        seed7: props.seed7,
        seed8: props.seed8,
        category: props.category
    }

    return (
        <div className='create-game-wrap'>
            <div className='create-game-header'>
                <Link to="/" className="create-title-text">
                    The Bracket Game
                </Link>
                <img src='https://i.imgur.com/qXF14ee.png' className="create-game-logo" alt="logo" />
                <p className='create-field' style={styleObj}>
                    What are we debating?
                </p>
                <input></input>
                <div className="create-field" style={styleObj}>
                    The Nominees:
                </div>
                <div className='form-wrap'>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
          </div>
        </div>
)};

export default UserGame;