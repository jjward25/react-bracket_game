import React from "react";
import './form-button.css';

const Button = props => {
    console.log(props.style);
    return (
        <div className="button-div">
            <button
                style={props.style}
                className="button"
                onClick={props.action}
            >
                {props.title}
            </button>
        </div>
    )
};

export default Button;
