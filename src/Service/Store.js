
import { applyMiddleware, createStore } from "redux"
import reducer from "./REDCUERS/index" // importing combined reducer

// applying middleware logger to see how data is flowing in REDUX
import logger from "redux-logger";

// redux-dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUX-THUNK FOR ASYNC WORKING 
import thunk from "redux-thunk";

// REDUX STORE FOR OUR APP , here creatStore accept root REDUCER at-least but can accept initial state and multiple middleware

// here my redux using 2 middlware one is logger for data flow and one is thunk for asyncronous working
export const store = createStore( 
    reducer , 
    composeWithDevTools( applyMiddleware( logger , thunk ))
)

console.log(store);
console.log(store.getState());

// here now what will happend when dispatch an action by component that action object will now go in rootReducer and from rootReducer to all child reducer one by one and based on action type out of all only one reducer will be called and return updated state to store 

