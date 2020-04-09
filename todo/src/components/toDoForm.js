import React, { useState } from 'react'

const ToDoForm = (props) => {
    const [task, setTask] = useState('');

    const handleChange = event => {
        setTask(event.target.value)
    }

    const handleSubmit = event => {
        props.dispatch({
            type: 'ADD_TASK',
            payload: task
        })
        setTask('')
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
          {'Add A Task: '}
          <input value={task} />
        </label>
        <input onChange={handleChange} type="submit" />
      </form>
    )
}

export default ToDoForm;
