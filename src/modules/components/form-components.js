import React from "react";

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
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    );
};


const Button = props => {
    console.log(props.style);
    return (
        <button
            style={props.style}
            className={
                props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
            }
            onClick={props.action}
        >
            {props.title}
        </button>
    )
};

export default { Button, Input };
