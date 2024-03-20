@@ -1,5 +1,6 @@
const { createStore } = require("redux")
const INCREMENT = 'INCREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

@@ -24,11 +25,19 @@ const incrementCounterAction = () => {

    }
}
const incrementCounterActionByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,

    }
}

// Decrement Counter 
const decrementCounterAction = () => {
    return {
        type: DECREMENT
        type: DECREMENT,


    }
}
@@ -50,6 +59,12 @@ const counterReducer = (state = initialState, action) => {
                count: state.count + 1
            }

        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }

        case DECREMENT:
            return {
                ...state,
@@ -77,7 +92,8 @@ store.subscribe(() => {
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())
// store.dispatch(resetCounterAction())
store.dispatch(incrementCounterActionByValue(5))


/* 