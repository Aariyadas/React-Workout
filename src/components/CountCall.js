import React from 'react'

function CountCall({text,count}) {
    console.log(`Rendering ${text}`)
  return (
    <div>{text} -{count}</div>
  )
}

export default CountCall