import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer'

const Todo = () => {
    const [todo, newTodo] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState);
  
     const handleChange = event => {
      newTodo(event.target.value);
    };
  
     const handleSubmit = event => {
      event.preventDefault();
      if (todo !== ''){
      dispatch({ type: 'NEW_TODO', payload: todo });
      newTodo('');
      }
    };
  
     return (
        <div className='todo-container'>
         <h1>Reduce(you)r Todos!</h1>
         <legend>Click"Status" to Toggle Your Todo
  
         {state.todos.map(todo => (
          <div>
            <p>Todo: {todo.item}</p>
            <p
             key={todo.id}
             onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}>
             Status: {todo.completed ? 'Completed' : 'Incomplete'}
            </p>
          </div>
         ))}
         <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='todo'
            value={todo}
            onChange={handleChange}
            placeholder='Add a todo!'
          />
          <button type='submit'>Submit</button>
         </form>
         <button onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
          Delete Todo
         </button>
         </legend>
        </div>
    );
  };
  
   export default Todo;