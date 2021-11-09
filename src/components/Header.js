import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAddi,shad}) => {
    // const ccc = () => {
    //     console.log('okay!!!')
    // }
    return (
        <header className = 'header'>
            <h1 >{title}</h1>
            <Button color={shad ?'red' : 'green'} text={shad ? 'Close' :'Add'} CC={onAddi}/>
            {/* <Button color='blue' text='F/o Ankisetty Ramya Anusri'/> */}

        </header>
    )
}

Header.defaultProps = {
    title : 'Hello Prasad',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
