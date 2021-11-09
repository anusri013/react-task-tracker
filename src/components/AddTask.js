import React from 'react'
import {useState} from 'react'


const AddTask = ({onAdde}) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [remainder,setRemainder] = useState(false)

    const onSub = (e) => {

        e.preventDefault()
        if(!(text && day)) {
            alert('please add thee task/Time Info in the in the the text format')
            return
        }

        onAdde({text,day,remainder})

        setText('')
        setDay('')
        setRemainder(false)

    }


    return (
        <form className='add-form' onSubmit={onSub}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text'
                 placeholder='Add the Task'
                 value={text}
                 onChange={((e) => setText(e.target.value))}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add both day & Time'
                 value={day}
                 onChange={((e) => setDay(e.target.value))}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Remainderr</label>
                <input type='checkbox'
                 checked = {remainder} 
                 value={remainder}
                 onChange={((e) => setRemainder(e.currentTarget.checked))}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>

        </form>
    )
}

export default AddTask
