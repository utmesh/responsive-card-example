import React from 'react'
import PropTypes from 'prop-types';
import './App.css';


const buttonStyle = {
    color: 'white',
    width: 120,
    padding: 7,
    margin: 10,

}


const Button = (props) => {
    const buttonStyleWithColor = Object.assign({ background: props.backgroundColor }, buttonStyle)
    return (
        <button style={buttonStyleWithColor}>{props.label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.oneOf(['red', 'green', 'blue'])
}

Button.defaultProps = {
    backgroundColor: 'green'
}



export default Button
