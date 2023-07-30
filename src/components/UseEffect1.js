import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count,setCount]=useState(0)


    useEffect(( ) => {
    document.title=`Clicked ${count}`
    })
  return (
<div>
<button onClick={()=>setCount(count+2)}>Click {count} times</button>
</div>

  )
}

export default UseEffect1