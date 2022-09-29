
import {BUY_CAKE , BUY_CAKE_AMOUNT, BUY_ICECREAM, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../constans"
// REDUCERS for our app

// state of our app is represented by object always 

const initialState1 = {

    numOfCakes:10,

}

// REDUCER FOR CAKE
export const cakeReducer = ( state=initialState1 , action) =>{

     switch(action.type){

        case BUY_CAKE:   // if reducer is for this action then return new object by spread operator and not mutating the previous object
        return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        
        case BUY_CAKE_AMOUNT: // for handling payload type action
        return {
            ...state,
            numOfCakes:state.numOfCakes-action.payload
        }

        default:   // if reducer was not for this action then return previous state
            return state
     }


}

const initialState2 = {

    numOfIceCreams:20,

}

// REDUCER FOR ICE-CREAM
export const iceCreamReducer = ( state=initialState2 , action) =>{

    switch(action.type){

       case BUY_ICECREAM:   // if reducer is for this action then return new object by spread operator and not mutating the previous object
       return {
           ...state,
           numOfIceCreams:state.numOfIceCreams-1
       }
       
       default:   // if reducer was not for this action then return previous state
           return state
    }


}

// REDUCERS FOR USER CONTAINER

const initialState3 = {

    loading:false,  // to show spinner 
    users:[],       // to populate dom
    error:""        // to show error message

}

export const userReducer = ( state=initialState3 , action )=>{

    switch (action.type) {

        case FETCH_USERS_REQUEST:
          return{
              ...state,
              loading:true
          } 
            
        case FETCH_USERS_SUCCESS:
           return{
            ...state,
            loading:false,
            users:action.payload,
            error:""
           } 

        case FETCH_USERS_FAILURE:
            return{
             ...state,
             loading:false,
             users:[],
             error:action.payload
            } 

        default: return state

            
    }

}