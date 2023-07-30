import React, { useState } from 'react'

function CounterPrev() {
    const intilalCount=0;
    const [count,setCount]=useState(intilalCount)
  return (
    <div>
    <div>
          Count:{count}
        
          <button onClick={() => setCount(intilalCount)}>Reset</button>
          <button  onClick={()=>setCount(prevCount =>prevCount+1)}>Increase</button>
          <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrease</button>
          <button onClick={()=>setCount(prevCount=>prevCount+5)}>Increse by 5</button>
     </div>
    </div>
  )
}

export default CounterPrev