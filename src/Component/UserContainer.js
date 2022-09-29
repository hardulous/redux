
import React from 'react'
import { useEffect } from 'react';
import { fetchUsers } from '../Service/ACTIONS/action';
import { useSelector , useDispatch } from 'react-redux';

function UserContainer() {
    
    console.log("USER CONTAINER EXECUTED");
    
    const state = useSelector(state => state.user)
    console.log(state);
   
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch(fetchUsers());

    }, [])

    return (

        <div>
            
            <h1>USERS:</h1>

            {  
            
              state.loading ? 
              <h2>Loading</h2>:
              state.error ?
              <h2>{state.error}</h2>:
              <div>
                  <h2>User-List</h2>
                  <div>

                   {state.users.map((element ,index)=>{

                     return <p key={index}>{element.name}</p> 

                   })}

                  </div>
              </div>
              
            }

        </div>

    )

}

export default UserContainer;
