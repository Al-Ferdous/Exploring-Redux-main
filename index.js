const { createStore } = require("redux");

// Action Types
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action Creators
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    };
};

const incrementCounterActionByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT
    };
};

const resetCounterAction = () => {
    return {
        type: RESET
    };
};

// Reducer
const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};

// Store
const store = createStore(counterReducer);

// Dispatch Actions
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterActionByValue(5));