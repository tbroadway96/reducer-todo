export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1234
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Math.random()
                }
            ];
        case 'TOGGLE_COMPLETE': 
            return state.map((task) => 
                task.item !== action.payload
                ? task
                : {
                    ...task,
                    completed: !task.completed
                }
            );
        case 'DELETE_COMPLETED':
            return state.filter(item => !item.completed)
        default: 
            return state
    }
} 
