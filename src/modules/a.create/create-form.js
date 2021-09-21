import React, { useState } from 'react';
import './create-form.css';
import {Link} from 'react-router-dom';

function UserGame () {

    const randomColors = ['steelblue','seagreen','darkkhaki']
    const styleObj = {
      color: randomColors[Math.floor(Math.random()*randomColors.length)].toString()
    }

    const [userGame, setUserGame] =  useState({
        seed1: 'Seed1',
        seed2: 'Seed2',
        seed3: 'Seed3',
        seed4: 'Seed4',
        seed5: 'Seed5',
        seed6: 'Seed6',
        seed7: 'Seed7',
        seed8: 'Seed8',
        category: 'Category'
    });

    const set = name => {
        return ({target: {value}}) => {
            setUserGame(oldValues => ({...oldValues,[name]:value}));
            var newObj = {}
            const gameName = userGame.category
            
            const newList = [userGame.seed1,userGame.seed2,userGame.seed3,userGame.seed4,userGame.seed5,userGame.seed6,userGame.seed7,userGame.seed8]
            newObj[gameName] = newList
            console.log('newobj',newObj)

            localStorage.removeItem("userGame")
            localStorage.setItem("userGame", JSON.stringify(newObj));
            console.log(JSON.parse(localStorage.getItem("userGame")))
        }
    };

    return (
        <div className='create-game-wrap'>
            <div className='create-game-header'>
                <Link to="/" className="create-title-text">
                    The Bracket Game
                </Link>
                <img src='https://i.imgur.com/qXF14ee.png' className="create-game-logo" alt="logo" />
                <form className='create-form-wrap'>
                    <p className='create-title' style={styleObj}>
                        What are we debating?
                    </p>
                    <input value={userGame.category} onChange={set('category')} className='form-input'/>
                    <div className="create-title" style={styleObj}>
                        The Nominees:
                    </div>
                    <div className='form-wrap'>
                        <input value={userGame.seed1} onChange={set('seed1')} className='form-input'/>
                        <input value={userGame.seed2} onChange={set('seed2')} className='form-input'/>
                        <input value={userGame.seed3} onChange={set('seed3')} className='form-input'/>
                        <input value={userGame.seed4} onChange={set('seed4')} className='form-input'/>
                        <input value={userGame.seed5} onChange={set('seed5')} className='form-input'/>
                        <input value={userGame.seed6} onChange={set('seed6')} className='form-input'/>
                        <input value={userGame.seed7} onChange={set('seed7')} className='form-input'/>
                        <input value={userGame.seed8} onChange={set('seed8')} className='form-input'/>

                        <Link to='/usergame' className='form-submit-link'><button className='form-submit'>Submit </button></Link>
                    </div>
                </form>
          </div>
        </div>
)};

export default UserGame;