import InputCakeContainer from './Component/InputCakeContainer';
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/UserContainer';
import CakeAndIceCreams from './Component/CakeAndIceCreams'
import CakeContainer1 from './Component/cakeContainerWithConnect'
import CakeContainer2 from './Component/cakeContainerWithHook'

function App() {

  return (

    <div className="REDUX">

        <h1 style={{color:'blue',textAlign:'center'}}>LEARNING REACT-REDUX</h1>
     
        <CakeContainer1/>
        {/* <CakeContainer2/> */}
        {/* <CakeAndIceCreams/> */}
        {/* <InputCakeContainer/> */}

        {/* here now ownProps contain props cake and iceCream */}
        {/* <ItemContainer cake={"choco-cake"}/> */}
        {/* <ItemContainer iceCream={"choco-iceCream"}/> */}

        {/* USER CONTAINER  */}
        {/* <UserContainer/> */}


    </div>

  );

}

export default App;

// ### REDUX 

// Redux is a predictable state container for our js application. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

// ## REDUX - 3 PRINCIPLE

// 1. the state of our application is stored in an object which would be managed by the redux store 

// 2. the only way to change the state is to emit an action , that is object describing what to happend and this object is action object

// 3. to specify how the state is updated by actions is done in PURE REDUCERS , reducers are function that take previous state and an action object and return the new updated state and as pure REDUCERS they return new STATE always and can not perform any asyncronous working 

// ## STATE IN REDUX

// Redux expects that all state updates are done immutably. that is In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies. EX::

const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3
  },
  b: 2
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42
  }
}

// console.log(obj === obj2); // offcourse not equal because by spread operator only property are same but refernce of object is different 

const arr = ['a', 'b']
// Create a new copy of arr, with "c" appended to the end

// const arr2 = arr.concat('c')

// console.log(arr === arr2); // again different 

// or, we can make a copy of the original array:
const arr3 = arr.slice()

// console.log(arr3)
// and mutate the copy:
arr3.push('c')

// console.log(arr3)

// ######### TERMINOLOGY

// 1. ACTIONS 

// An action is a plain JavaScript object that has a TYPE field which is of type string , which contain name of ACTION and type payload which contain further information and data about action of type anything  You can think of an action as an event that describes something that happened in the application based on user interaction. EX: but here we are not restricted to type property only but structure of action object is up to us that is we can add further property like data,info etc

const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk',
  info:'choco milk',
  amount:100
}

// 2. ACTION CREATORS

// An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

const addTodo = (text) => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}

// TO INSTALL REACT WITH REDUX INSTALL WITH COMMAND npm install redux react-redux

// NOTE: there can be more than one action object in an app

// 3. REDUCERS

//A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.


//### Reducers must always follow some specific rules:

// 1. They should only calculate the new state value based on the state and action arguments

// 2. They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.

// 3. They must not do any asynchronous logic, calculate random values, or cause other "side effects"

// #### The logic inside reducer functions typically follows the same series of steps:

// 1. Check to see if the reducer cares about this action

// 2. If so, make a copy of the state, update the copy with new values, and return it Otherwise, return the existing state unchanged

// NOTE:: there can be more than one reducer for app 


// 4. STORE

// The current Redux application state lives in an object called the store . The store is created by passing in a reducer, and has a method called getState that returns the current state value . EX

// The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value . EX

// store also have subscribe method to register listener which accpet a function as an argument which is executed just before the dispatch method and it return an unsubscribe method which is excuted to unsubscribe to store 

// let say we have cake app and state of this app is maintained sperately in redux store and our application is always subscribed to this redux store but app can not directly update the state but first need to dispatch an action and that action then handled in reducer and update the state and as soon as state is updated the value is then again passed to app because the app is subscribed to the store 

// ################## OVERALLL ######################################

// #### Redux uses a "one-way data flow" app structure ##############

// State describes the condition of the app at a point in time, and UI renders based on that state

// When something happens in the app:

// 1. The UI dispatches an action
// 2. The store runs the reducers, and the state is updated based on what occurred
// 3. The store notifies the UI that the state has changed
// 4. The UI re-renders based on the new state

// #### Redux uses several types of code

// 1. Actions are plain objects with a type field, and describe "what happened" in the app
// 2. Reducers are functions that calculate a new state value based on previous state + an action object
// 3. A Redux store runs the root reducer whenever an action is dispatched

// ### REACT-REDUX + HOOKS

// react redux with hooks allow us to subscribe to redux store state and dispatch an action without using mapStateToProps and mapDispatchToProps by {connect} but now use useSelector and useDispatch hook

// ##### MIDDLEWARE::

// it is the suggested way to extend redux with custom and user defined functionality means if we want to perform extra side effect work simontaneously with redux work , we can acheive it with middleware , it provides a third party extension point btw dispatching an action and the moment it reached the reducer , EX: for logging,crash reports and performing some asynchronous tasks etc , we will use middleware

// #### REDUX-DEV TOOLS

// here first download extension first and then download package by command npm install --save redux-devtools-extension


// ### ASYN ACTIONS::

// some action which return promise take some time to resolve and return some thing and for such action we use ASYNC-AWAIT keyword ex API CALLS etc and such task can not be done in reducer because they are PURE FUNCTION so to do such task we again use middlware in REDUX , but first install 2 packages axios which allow us to perform request similar to what fetchApi do from end point and redux thunk which allow us to define async action creator in our app , command is npm install axios redux-thunk


// NOTE ::::: ONE IMPORTANT BEHAVIOUR OF REACT-REDUX , here in redux we have 3 state of our application cake,icecream and users , now let's say i have 3 component A,B,C where A is subscribed to state cake and icecream , b is subscribed to only cake where as c is subscribed to user state , now let's say from component A we have dispatch an action which changed the state cake , as soon as state change ONLY THOSE COMPONENT WHICH ARE ACTUALLY USING THIS STATE CAKE AND ITS PROPERTY WILL GET RE-RENDER AND ELSE ONE WILL NOT RE-RENDER which in case only component A and B will re-render but not C , and if we dispatched action from A which will change iceCream state so only component A will re-render and if changed User State then only component C will re-render 

// IT MEANS CHANGES TO STATE OF OUR REDUX APP WILL LEADS TO RE-RENDERING OF ONLY THOSE COMPONENT WHICH ARE SUBSCRIBED THAT IS USING THAT SPECIFIC STATE VALUE   

// #### REDUX MIDDLEWARE

// Middlware allow us to perform side effect operation just after the action is dispatched and moment it reaches the reducer function 