import React, { useEffect, useState } from 'react'
// Conditional rendering for react
function UseEffect2() {
    const [name,setName]=useState(" ")
    const[count,setCount]=useState(0)

  useEffect(()=>{
    document.title=` chnages ${count} times`
  },[count])


  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Count {count} times</button>
    </div>
  )

}

export default UseEffect2