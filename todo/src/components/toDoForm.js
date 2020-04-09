import React, { useState } from 'react'

const ToDoForm = (props) => {
    const [task, setTask] = useState('');

    const handleChange = event => {
        setTask(event.target.value)
    }

    const handleSubmit = event => {
        console.log('dispatched')
        props.dispatch({
            type: 'ADD_TASK',
            payload: task
        })
        setTask('')
        event.preventDefault()
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
        <label>
          {'Add A Task: '}
          <input onChange={event => handleChange(event)} value={task} />
        </label>
    <button type="submit">Add Task</button>
      </form>
    )
}

export default ToDoForm;
