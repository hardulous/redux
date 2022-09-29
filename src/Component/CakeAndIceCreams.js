
import React from 'react'
import { buyCake , buyIceCream } from '../Service/ACTIONS/action'
import { connect } from 'react-redux'

function CakeAndIceCreams(props) {
    
    console.log("CAKE AND ICE CREAM RENDER")
    console.log(props);

    return (

        <div>

            <h2>Number of Cakes is - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <br />
            <h2>Number of IceCreams is - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCreams</button>
            
        </div>

    )

}

// for both cake and ice cream

const mapStateToProps =(state)=>{
   
    return{

        numOfCakes:state.cake.numOfCakes,
        numOfIceCreams:state.iceCream.numOfIceCreams

    }

}

// for both cake and ice cream
const mapDispatchToProps =(dispatch)=>{

    return{

        buyCake : ()=> dispatch(buyCake()),
        buyIceCream: ()=> dispatch(buyIceCream())

    }

}


export default 
connect(mapStateToProps,mapDispatchToProps)
(CakeAndIceCreams)
