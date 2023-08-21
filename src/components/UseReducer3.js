import React ,{useReducer} from 'react'


const intialState=0;
const reducer =(state,action) =>{
  // eslint-disable-next-line default-case
  switch(action){
    case 'increment':
        return state+1
    case 'decrement':
        return state-1
    case 'reset':
        return intialState
    default: return state

  }

}
const UseReducer3 = () => {
   const[count,dispatch]= useReducer(reducer,intialState)
   const[countTwo,dispatchTwo]=useReducer(reducer,intialState)
  return (
    <div>
        <div>Count-{count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>(dispatch('decrement'))}>Decrement</button>
        <button onClick ={()=>dispatch('reset')}>Reset</button>
        <div>
        <div>Count-{countTwo}</div>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>(dispatchTwo('decrement'))}>Decrement</button>
        <button onClick ={()=>dispatchTwo('reset')}>Reset</button>
    </div>
    </div>
    
  )
}

export default UseReducer3
