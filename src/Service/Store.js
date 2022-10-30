
import { applyMiddleware, createStore } from "redux"
import reducer from "./REDCUERS/index" // importing combined reducer

// applying middleware logger to see how data is flowing in REDUX
import logger from "redux-logger";

// redux-dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUX-THUNK FOR ASYNC WORKING 
import thunk from "redux-thunk";

// here now what will happend when dispatch an action by component that action object will now go in rootReducer and from rootReducer to all child reducer one by one and based on action type out of all only one reducer will be called and return updated state to store 

const customMiddleWare = (store) => (next) => (action)=>{
    console.log('Inside Middleware')
    console.log(store,next,action)

    const result=next(action) // return the action object , this call is imp because this next argument is provided by redux similar to dispatch method and if we dont execute it then from here my action will not travel further to reducer 

    // store is my redux state container , next is dispatch passed automatically by redux and action is whatever action object is passed currently in latest dispatch 
    console.log("The Result Is",result)
}

// The above custom middleware we create for our redux must always consist of pattern we call CURRYING in js which is a pattern of converting function with 2 or more argument into single argument function , for more info go to https://benestudio.co/currying-in-javascript-es6/ 

// similar version of above middleware is 
const customMiddleWare2 = (store)=>{

    return (next)=>{

        return (action)=>{
            // actual working will take place 
        }
    }
}

// REDUX STORE FOR OUR APP , here creatStore accept root REDUCER at-least but can accept initial state and multiple middleware

// here my redux using 2 middlware one is logger for data flow and one is thunk for asyncronous working
export const store = createStore( 
    reducer , 
    // composeWithDevTools( applyMiddleware( logger , thunk , customMiddleWare ))
    composeWithDevTools( applyMiddleware( customMiddleWare ))
)

// console.log(store);
// console.log(store.getState());