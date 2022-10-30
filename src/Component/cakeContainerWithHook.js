
import React from 'react'
import {buyCake} from '../Service/ACTIONS/action'
import { useSelector , useDispatch } from 'react-redux';

function CakeContainer() {
    
    console.log("CAKE CONTAINER WITH HOOK RENDER")
    // here by this hook we can get any information from REDUX STORE 
    let cakes = useSelector(state => {
        console.log(state)
        return state.cake.numOfCakes
    }); 
    
    // here now this below variable become a disptach function and just passed an action object to it 
    let dispatch = useDispatch();

    return (

        <div>

            <h2>Number of Cakes - {cakes}</h2>

            {/* here this buyCake will return an action object first and then action go to root Redcuer of Store and from there go in child reducer one and by one and based on action type will update state and once state is updated then all those component using these state will trigger re-render */}
            
            <button onClick={()=>{dispatch(buyCake())}} >Buy Cakes</button>
                       
        </div>

    )

}

// useSelector() => it is a hook which accept a function as argument that takes the current state as an argument and returns whatever data you want from it. It’s very similiar to mapStateToProps() and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props.

// useDispatch() => it is a hook which is assigned it to a variable and by this assigned variable become a dispatch function . And with this, we are able to dispatch any action to the store by simply adding an action object as an argument to the new variable 

// here all this hook can work without doing any connect to component

export default CakeContainer
