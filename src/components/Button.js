import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text, CC }) => {
    return (
           <button
            onClick={CC}
            style = {{backgroundColor: color}}
           className = 'btn'>
               {text}      
           </button> 
    )
}

Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button