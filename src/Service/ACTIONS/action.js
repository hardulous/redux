
import { BUY_CAKE , BUY_ICECREAM , BUY_CAKE_AMOUNT , FETCH_USERS_FAILURE , FETCH_USERS_SUCCESS , FETCH_USERS_REQUEST } from "../constans"

// FOR GET REQUEST
import axios from "axios"

// ACTION CREATOR for our APP

// action for cake
export const buyCake=()=>{
    
    return {

        type:BUY_CAKE        

    }
}

// action for iceCream
export const buyIceCream=()=>{
    
    return {

        type:BUY_ICECREAM

    }
}

// to buy by specific amount
export const buyCakeAmount=(amount)=>{
    
    return {

        type:BUY_CAKE_AMOUNT,        
        payload: amount

    }
}

// ACTION CREATOR FOR USER CONTAINER::
export const fetchUsersRequest=()=>{
    
    return {

        type:FETCH_USERS_REQUEST,

    }
}

export const fetchUsersSuccess=(users)=>{
    
    return {

        type:FETCH_USERS_SUCCESS,
        payload:users

    }
}

export const fetchUsersFailure=(error)=>{
    
    return {

        type:FETCH_USERS_FAILURE,        
        payload: error

    }
}

// ASYNCRONOUS ACTION BY THUNK MIDDLEWARE:::

// this function is special because by thunk middleware this function return other function which can be async and can perform other side-effect work as well and can accept dispatch as an argument , here using fake api from json palceholder

export const fetchUsers =()=>{
   
    return  (dispatch)=>{

        dispatch(fetchUsersRequest()); // now when sending request will show loading true

         axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response =>{

            const Users = response.data;
            dispatch(fetchUsersSuccess(Users)); // if promise is resolved and we got the data then dispatch success action

        } )
        .catch( error=>{

            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg)); // if promise is rejected then dispatch error action

        } )

    }
    
}