import React, { useState } from 'react'

const UseMemo = () => {

  const [count,setCount] =useState(0);
  const [todo,setTodo] =useState([]);

  return (
   <div>
    <div>
        <h2>My Todos</h2>
        {todo.map((todo,index)=>{
            <return
             <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add</button>
    </div>

    <div>
        Count:{count}
        <button onClick={increment}>+</button>
    </div>
   </div>
  )
}

export default UseMemo