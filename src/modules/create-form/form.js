import React, { useState } from 'react';
import './form.css';
import Input from './components/form-input';
import Button from './components/form-button';
import {Link} from 'react-router-dom';
import logo from './bracket-transparent.PNG';

function Creategame (props) {
    const [state, setState] = useState({
        seed1: undefined,
        seed2: undefined,
        seed3: undefined,
        seed4: undefined,
        seed5: undefined,
        seed6: undefined,
        seed7: undefined,
        seed8: undefined,
        category: undefined
    })

    function stateUpdate(e) {
        e.preventDefault();
        const value = e.target.value;

        setState({
            ...state,
            [e.target.name]: value
        });

        console.log({ state })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        props.onSubmit(state); //tells the onSubmit in Index.js what to pass as "e"
    }

    return (

        <form className="form-container" onSubmit={handleFormSubmit}>
            <div className="vertical-center">

                <Link to="/">
                    <p className="title-text">
                    The Bracket Game
                    </p>
                </Link>

                <img src={logo} className="menu-logo" alt="logo" />

                <p>Your Category</p>
                <Input
                    type="text"
                    name="category"
                    value={state.category}
                    placeholder="Category"
                    onChange={stateUpdate}
                    />

                <p>Your Nominees</p>
                <Input
                    type="text"
                    name="seed1"
                    value={state.seed1}
                    placeholder="Seed 1"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed2"
                    value={state.seed2}
                    placeholder="Seed 2"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed3"
                    value={state.seed3}
                    placeholder="Seed 3"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed4"
                    value={state.seed4}
                    placeholder="Seed 4"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed5"
                    value={state.seed5}
                    placeholder="Seed 5"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed6"
                    value={state.seed6}
                    placeholder="Seed 6"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed7"
                    value={state.seed7}
                    placeholder="Seed 7"
                    onChange={stateUpdate}
                />
                <Input
                    type="text"
                    name="seed8"
                    value={state.seed8}
                    placeholder="Seed 8"
                    onChange={stateUpdate}
                />
                
                
                <Button
                    action={handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                />
            </div>
        </form >


    )
};
export default Creategame;
