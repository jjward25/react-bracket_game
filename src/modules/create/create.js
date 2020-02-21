import React from 'react';
import './create.css';


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Contestants' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form className="create-form" onSubmit={this.handleSubmit}>
                <p> Enter Your Contestants </p>

                <div className="form-label">
                    <input className="form-input" id="input1" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input2" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input3" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input4" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input5" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input6" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input7" type="text" />
                </div>

                <div className="form-label">
                    <input className="form-input" id="input8" type="text" />
                </div>

                <p> Enter Your Contest Category </p>
                <div className="form-label">
                    <input className="form-input" id="input9" type="text" />
                </div>

                <input className="form-submit" type="submit" value="Submit" />

            </form>

        );
    }
}


export default Create;
