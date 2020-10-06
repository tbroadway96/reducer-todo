import React, { useReducer } from 'react'
import ToDoTask from './toDoTask'
import ToDoForm from './toDoForm'
import { 
    reducer, 
    initialState 
} from '../reducers/toDoReducer'

const ToDoList = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>
                {'To Do List\n'}
                <button onClick={
                    () => dispatch({ type: 'DELETE_COMPLETED' })
                    }
                    className='button'
                >
                    Clear Completed Tasks
                </button>
            </h2>
            <div>
            <ToDoForm dispatch={dispatch} />
                <ul className='toDoList'>
                    {state.map((task) => {
                        return (
                        <ToDoTask 
                            {...task} 
                            key={task.id} 
                            dispatch={dispatch} 
                        />
                        )
                    })}
                </ul> 
            </div>
        </>
    )
}

export default ToDoList;
