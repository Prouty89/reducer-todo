import { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer'

const Todo = () => {
const [newTodo, setNewTodo] = useState();

const [state, dispatch] = useReducer(todoReducer, initialState);
}

const handleChanges = e => {
    setNewTodo(e.target.value)
};


return(
    <div>
        {!state.editing ? (
            <h1>
                {state.todo}
            </h1>
        )}
    </div>

)

