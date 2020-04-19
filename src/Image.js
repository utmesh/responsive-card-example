import React from 'react'
import PropTypes from 'prop-types';

import germany from './img/germany.jpg'
import Bonn from './img/uni_bonn.jpg';
import Pokhara from './img/pokhara_university.jpg';


function Image(props) {
    return (
        <div>
            <img src= {props.imageSource} alt={props.name} height='300' width="100%" />
        </div>

    )
}

Image.propTypes = {
    imageSource: PropTypes.oneOf([germany, Bonn, Pokhara]),
    name: PropTypes.oneOf(['germany', 'Bonn', 'Pokhara'])
}

export default Image