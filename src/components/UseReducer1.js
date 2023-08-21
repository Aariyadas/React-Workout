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
const UseReducer1 = () => {
   const[count,dispatch]= useReducer(reducer,intialState)
  return (
    <div>
        <div>Count-{count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>(dispatch('decrement'))}>Decrement</button>
        <button onClick ={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer1
