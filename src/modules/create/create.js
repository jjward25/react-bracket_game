import React from 'react';
import './create.css';


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('Category: ' + this.state.input9 + 'Contestants: ' + this.state.input1 + ', ' + this.state.input2 + ', ' + this.state.input3 + ', ' + this.state.input4
            + ', ' + this.state.input5 + ', ' + this.state.input6 + ', ' + this.state.input7 + ', ' + this.state.input8);
        event.preventDefault();
    }

    render() {
        return (

            <form className="create-form" onSubmit={this.handleSubmit}>
                <p> Enter Your Contestants </p>

                <div className="form-label">
                    <input className="form-input" name="input1" type="text" value={this.state.input1} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input2" type="text" value={this.state.input2} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input3" type="text" value={this.state.input3} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input4" type="text" value={this.state.input4} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input5" type="text" value={this.state.input5} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input6" type="text" value={this.state.input6} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input7" type="text" value={this.state.input7} onChange={event => this.handleChange(event)} />
                </div>

                <div className="form-label">
                    <input className="form-input" name="input8" type="text" value={this.state.input8} onChange={event => this.handleChange(event)} />
                </div>

                <p> Name Your Category </p>
                <div className="form-label">
                    <input className="form-input" name="input9" type="text" value={this.state.input9} onChange={event => this.handleChange(event)} />
                </div>

                <input className="form-submit" type="submit" value="Submit" />

            </form>

        );
    }
}



export default Create;
