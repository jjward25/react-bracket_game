import React from "react";
import './form-input.css';

const Input = props => {
    //console.log(props.value);
    return (
        <div className="form-input">
            <label for={props.name} className="form-input-label">
                {props.title}
            </label>
            <input
                className="form-input-control"
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;