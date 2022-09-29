
import React , {useState} from 'react'
import { buyCakeAmount } from '../Service/ACTIONS/action'
import { connect } from 'react-redux'

function InputCakeContainer(props) {
    
    console.log("INPUT CAKE CONTAINER RENDER")
    console.log(props);

    const [number, setnumber] = useState(0)

    return (

        <div>
         
            <h2>Number of Cakes is - {props.numOfCakes}</h2>

            <input type="number" value={number} onChange={(e)=>{setnumber(e.target.value)}} />

            <button onClick={()=>{props.buyCakeAmount(number)}}>Buy {number} Cake</button>
          
            
        </div>

    )

}

// for cake 
const mapStateToProps =(state)=>{
   
    return{

        numOfCakes:state.cake.numOfCakes

    }

}

// for input cake 
const mapDispatchToProps =(dispatch)=>{

    return{

        buyCakeAmount : (amount)=> dispatch(buyCakeAmount(amount))

    }

}


export default 
connect(mapStateToProps,mapDispatchToProps)
(InputCakeContainer)
