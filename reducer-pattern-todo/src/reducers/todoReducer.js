export const initialState = {
    todo: "Walk Dog",
    editing: false,
}


export const todoReducer = (state, action) => {
    //Actions
    switch(action.type) {
        case 'NEW_TODO':
        return{
            ...state, 
            editing: !state.editing
        }
        default: 
        return state;
    }
}