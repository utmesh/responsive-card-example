import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

//TODO: validate children props
export default function Card(props) {
    return (
        <div className='Card'>
            {props.children}
        </div>
    )
}
Card.propTypes = {
    children: PropTypes.elementType
}