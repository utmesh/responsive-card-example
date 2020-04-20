import React from 'react';
import PropTypes from 'prop-types';

const infoStyle = {
    margin: 5,
    word_break: 'break_word'


}

function Info(props) {
    return (
        <p
            style=
            {infoStyle}>
            {props.text}
        </p>

    )
}

Info.propTypes = {
    text: PropTypes.string.isRequired
}

export default Info