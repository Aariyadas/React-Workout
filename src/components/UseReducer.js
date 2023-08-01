import React, { useReducer } from 'react'
const intialState=0;
const reducer =(state,action)=>{
    switch(action){
        case 'increment': return state+1
        case 'decrement':return state-1
        case 'reset':return intialState
        default:return state
    }
}



const UseReducer = () => {
 const [count,dispatch]=useReducer(reducer,intialState)





  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>



    </div>
  )
}

export default UseReducer
