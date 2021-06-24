import React, { useState } from 'react';
import './form.css';
import Input from './form-components/form-input';
import Button from './form-components/form-button';
import {Link} from 'react-router-dom';
import logo from '../../images/bracket-transparent.PNG';

function Creategame (props) {
    const [state, setState] = useState({
        seed1: props.seed1,
        seed2: props.seed2,
        seed3: props.seed3,
        seed4: props.seed4,
        seed5: props.seed5,
        seed6: props.seed6,
        seed7: props.seed7,
        seed8: props.seed8,
        category: props.category
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
                    placeholder="Category Name"
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
                
                <Link className="form-submit" to='/creategame-rd1'>
                    <Button type={"primary"} title={"Begin!"}action={stateUpdate}>
                    </Button>
                </Link>
            </div>
        </form >


    )
};
export default Creategame;
