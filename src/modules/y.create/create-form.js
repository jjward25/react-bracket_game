import React, { useState } from 'react';
import './create-form.css';
import {Link} from 'react-router-dom';

function UserGame () {

    const randomColors = ['steelblue','seagreen','darkkhaki']
    const styleObj = {
      color: randomColors[Math.floor(Math.random()*randomColors.length)].toString()
    }
    const styleObj2 = {
        backgroundColor: randomColors[Math.floor(Math.random()*randomColors.length)].toString(),
        textDecoration: 'none'
      }

    const [userGame, setUserGame] =  useState({
        seed1: 'Seed 1',
        seed2: 'Seed 2',
        seed3: 'Seed 3',
        seed4: 'Seed 4',
        seed5: 'Seed 5',
        seed6: 'Seed 6',
        seed7: 'Seed 7',
        seed8: 'Seed 8',
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
        }
    };

    return (
        <div className='create-game-wrap'>
            <div className='create-game-header'>
                <Link to="/" className="create-title-text">
                    The Bracket Game
                </Link>
                <img src='https://i.imgur.com/cFmxw5t.png' className="create-game-logo" alt="logo" />
                <form className='create-form-wrap'>
                    <p className='create-title' style={styleObj}>
                        What's the debate?
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

                        <Link to='/usergame' className='form-submit-link'><button className='form-submit' style={styleObj2}>Submit </button></Link>
                    </div>
                </form>
          </div>
        </div>
)};

export default UserGame;