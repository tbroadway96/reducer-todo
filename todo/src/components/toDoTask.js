import React from 'react'

const ToDoTask = (props) => {
    const toggleComplete = () => {
        props.dispatch({ 
            type: 'TOGGLE_COMPLETE', 
            payload: props.item
        })
    }

    return (
        <h3 className={`task${props.completed 
                                ? '-completed' 
                                : ''}`
                        }
            onClick={() => toggleComplete()}
        >
            {props.item}
            <span style={{fontSize: '12px', 
                          color: '#b3b9c4' 
                        }}>
                (Click to mark completed)
            </span>
        </h3>
    );
}

export default ToDoTask;
