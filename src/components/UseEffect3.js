// Use Effect That Runs only Once
import React, { useEffect, useState } from 'react'

function UseEffect3() {
 const [x,setX] =useState(0)
 const [y,setY] =useState(0)

const logMousePosition = e =>{
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
}

 useEffect(()=>{
    console.log("useEffect Called")
    window.addEventListener('mousemove',logMousePosition)
 },[])

  return (
    <div>
        Hooks X-{x} 
        Hook Y-{y}
    </div>
  )
}

export default UseEffect3