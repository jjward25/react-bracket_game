import React from 'react';
import './form.css';
import Input from './components/form-input';
import Button from './components/form-button';



class Createdform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newGame: {
                seed1: "",
                seed2: "",
                seed3: "",
                seed4: "",
                seed5: "",
                seed6: "",
                seed7: "",
                seed8: "",
                category: ""
            },

        };

        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newGame: {
                    ...prevState.newGame,
                    [name]: value
                }
            }),
            () => console.log(this.state.newGame)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let gameData = this.state.newGame;

        fetch("http://example.com", {
            method: "POST",
            body: JSON.stringify(gameData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }


    render() {

        return (

            < form className="form-container" onSubmit={this.handleFormSubmit} >
                <div className="vertical-center">
                    <p>Enter Contestants</p>
                    <Input
                        inputType={"text"}
                        name={"seed1"}
                        value={this.state.newGame.name}
                        placeholder={"1 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed2"}
                        value={this.state.newGame.name}
                        placeholder={"2 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed3"}
                        value={this.state.newGame.name}
                        placeholder={"3 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed4"}
                        value={this.state.newGame.name}
                        placeholder={"4 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed5"}
                        value={this.state.newGame.name}
                        placeholder={"5 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed6"}
                        value={this.state.newGame.name}
                        placeholder={"6 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed7"}
                        value={this.state.newGame.name}
                        placeholder={"7 Seed"}
                        handleChange={this.handleInput}
                    />
                    <Input
                        inputType={"text"}
                        name={"seed8"}
                        value={this.state.newGame.name}
                        placeholder={"8 Seed"}
                        handleChange={this.handleInput}
                    />
                    <p>Name Your Category</p>
                    <Input
                        inputType={"text"}
                        name={"category"}
                        value={this.state.newGame.name}
                        placeholder={"Category"}
                        handleChange={this.handleInput}
                    />
                    <Button
                        action={this.handleFormSubmit}
                        type={"primary"}
                        title={"Submit"}
                    />
                </div>
            </form >


        )
    }

};

export default Createdform;
