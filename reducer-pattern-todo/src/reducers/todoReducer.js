export const initialState = {
    todos: [
        // { item: 'Walk Dog', completed: false, id: 98423 },
        // { item: 'Water Plants', completed: false, id: 98422},
        // { item: 'Study Javascript', completed: false, id: 98421},
    ],
}


export const todoReducer = (state, action) => {
    //Actions
    switch (action.type) {
      case 'NEW_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              item: action.payload,
              completed: false,
              id: Date.now(),
            },
          ],
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return { ...todo, completed: !todo.completed };
            } else {
              return todo;
            }
          }),
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.completed !== true),
        };
      default:
        return state;
    }
  };