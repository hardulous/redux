
import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../Service/ACTIONS/action';

function ItemContainer(props) {
    
    console.log("ITEM CONTAINER RENDER");
    console.log(props); // this props is combination of ownProps and object return by mapStateToProps 

    return (

        <div>
             
             <h2>Item - {props.item?props.item:"NOT SUBSCRIBED TO STORE"}</h2>
             <button onClick={props.buyItem}>Buy Item</button>
            
        </div>

    )

}

// here ownProps parameter contain props and value passed to this component by its parent component
const mapStateToProps =( state , ownProps )=>{
    
    console.log(ownProps);
    const itemState = ownProps.cake ? state.cake.numOfCakes:state.iceCream.numOfIceCreams;

    return{

        item:itemState

    }

}

const mapDispatchToProps =( dispatch , ownProps )=>{
   
   const dispatchFunction = ownProps.cake ? 
   ()=>{dispatch(buyCake())}:
   ()=>{dispatch(buyIceCream())}
   
   return{
       buyItem:dispatchFunction
   }
   
}

// now if u want to only dispatch action but not subscribe to state changes in store that is to not triger re-render if state changes , then just define mapDispatchToProps and passed null in place of mapStateToProps EX: connect( null , mapDispatchToProps )(component)

export default connect(null,mapDispatchToProps)(ItemContainer)


// export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)

// 1. HERE mapStateToProps also have 2nd argument called ownProps, if your component needs the data from its own props to retrieve data from the store. This argument will contain all of the props given to the wrapper component by its parent component

// EXAMPLE::
// go to website https://react-redux.js.org/using-react-redux/connect-mapstate

// 2. HERE mapDispatchToProps also have 2nd argument called ownProps , and if your component need the data from its own props to dispatch specific action .

// EXAMPLE::
// go to webiste https://react-redux.js.org/using-react-redux/connect-mapdispatch