import React from 'react'
import moment from 'moment'

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
            
            {!props.completed
                ? (
                    <span style={{fontSize: '12px', 
                          color: '#b3b9c4' 
                        }}>
                        (Click to mark completed)
                    </span>
                ) : 
                (
                    <span className='date' 
                        style={{fontSize: '10px', 
                                color: '#b3b9c4'
                               }}
                    >
                        Completed On: {moment(Date.now())
                                       .format('MM/DD/YYYY')
                        }
                    </span>
                )
            }
        </h3>
    );
}

export default ToDoTask;
