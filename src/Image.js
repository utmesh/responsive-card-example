import React from 'react'
import PropTypes from 'prop-types';

function Image(props) {
    return (
        <div>
            <img src= {props.imageSource} alt={props.name} height='300' width="100%" />
        </div>

    )
}

Image.propTypes = {
    imageSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Image