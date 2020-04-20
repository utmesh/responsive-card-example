import React from 'react'
import PropTypes from 'prop-types';

const titleStyle = {
    margin: 5

}




function Title(props) {
    const titleStyleWithColor = Object.assign({ color: props.titleColor }, titleStyle)
    return (
        <div>
            <h3 style={titleStyleWithColor}>
                {props.title}
            </h3>
        </div>
    )
}



Title.propTypes = {
    title: PropTypes.string.isRequired,
    titleColor: PropTypes.oneOf(['green', 'red', 'blue'])


}

export default Title;