
import React from 'react'
import {buyCake} from '../Service/ACTIONS/action'
import { connect } from 'react-redux'

function CakeContainer(props) {
    
    console.log("CAKE CONTAINER WITH CONNECT RENDER")
    console.log(props)

    return (

        <div>

            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
                       
        </div>

    )

}

// now to dispatch action means connecting action and reducers and get state value is done by 2 function :

// 1. mapStateToProps => this function get redux state as a parameter and return an object whose field can be anything based on what we need for that component , it is also called SELECTOR means function which have access to REDUX STATE and can return any information from that state , and whatever value i send as object from mapStateToProps and mapDispatchToProp is available to me as props of that component

const mapStateToProps =(state)=>{
   
    // returning information numOfCakes from our STATE 
    console.log(state)
    return{

        numOfCakes:state.cake.numOfCakes

    }

}

// 2. mapDispatchToProps => this function get store dispatch method as a parameter and returns an object contain function which dispatch action which is required for that component redux 

const mapDispatchToProps =(dispatch)=>{

    return{

        buyCake : ()=> dispatch(buyCake())

    }

}

// when these 2 functions are created now connect it to COMPONENT that using it and after connection is done and if we give props to our component that props become object with value return by mapStateToProps and mapDispatchToProps

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
