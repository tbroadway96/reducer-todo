import React from 'react'

const ToDoTask = (props) => {
    const toggleComplete = () => {
        props.dispatch({ 
            type: 'TOGGLE_COMPLETE', 
            payload: props.payload
        })
    }

    return (
        <div className={`task ${props.completed 
                                ? '-completed' 
                                : ''}`
                        }
            onClick={toggleComplete}
        >
            {props.item}
        </div>
    );
}

export default ToDoTask;
