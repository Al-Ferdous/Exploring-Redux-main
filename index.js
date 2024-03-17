const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

// create reducer for counter 
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state
    }
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Niaj' }
    }
}