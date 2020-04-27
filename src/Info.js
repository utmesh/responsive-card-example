import React from 'react';
import PropTypes from 'prop-types';
import './Info.css'
//TODO: convert inline style to classes/css

function Info(props) {
    return (
        <p>
            {props.text}
        </p>

    )
}

Info.propTypes = {
    text: PropTypes.string.isRequired
}

export default Info