import React from 'react'
import  { FaTimes } from 'react-icons/fa'

const Task = ({ttt , onDell, onTgll}) => {
    return (
        <div className={`task ${ttt.remainder ? 'reminder' : ''}` } onDoubleClick={() => onTgll(ttt.id)}> 
            <h3>
                {ttt.text}
                 <FaTimes
                  style={{color: 'red', cursor: 'pointer' }} 
                  onClick =  {() => onDell(ttt.id)}
                 />
            </h3>
            <p>{ttt.day}</p>
        </div>
    )
}

export default Task
