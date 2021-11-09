import React from 'react'
import Task from './Task'

const Tasks = ({ tt, onDel, onTgl }) => {
    
    
    return (
        <>
        {tt.map((task) => (
        <Task key={task.id}  
         ttt = {task}
         onDell = {onDel} 
         onTgll = {onTgl}/>)
        )}      
        </>
    )
}

export default Tasks
