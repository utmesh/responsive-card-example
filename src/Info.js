import React from 'react';
import PropTypes from 'prop-types';

const info_style = {
    margin: 5,
    word_break: 'break_word'


}

function Info(props) {
    
    return (
        <div>
            <p style={info_style}>
                {props.text}
            </p>
        </div>
    )
}

Info.propTypes = {
    text: PropTypes.string.isRequired
}

export default Info