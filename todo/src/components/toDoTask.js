import React from 'react'

const ToDoTask = (props) => {
    const toggleComplete = () => {
        props.dispatch({ 
            type: 'TOGGLE_COMPLETE', 
            payload: props.payload
        })
    }

    return (
        <h3 className={`task ${props.completed 
                                ? '-completed' 
                                : ''}`
                        }
            onClick={() => toggleComplete()}
        >
            {props.item}
        </h3>
    );
}

export default ToDoTask;
