import React from 'react'
import PropTypes from 'prop-types';

const TitleStyle = {
    margin: 5

}




function Title(props) {
    const TitleStyleWithColor = Object.assign({ color: props.titleColor }, TitleStyle)
    return (
        <div>
            <h3 style={TitleStyleWithColor}>
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