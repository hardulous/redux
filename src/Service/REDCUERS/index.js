
import { combineReducers } from "redux";
import { cakeReducer , iceCreamReducer , userReducer } from "./reducer";

// COMBINE REDUCER WHICH SERVE AS ROOT REDUCER FOR OUR STORE:: this combineReducers method accept argument where each keys value correspond to name of Reducer and actual reducer and return a RootReducer for Store 

// now if u do console.log(state) in mapStateToProps then it show these below 3 reducers defined in combineReducer 

export default combineReducers({

    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,

})