import React from 'react'

function Interview2() {
  const getInput =(event)=>{
    console.log(event.target.name)
  }
  const addNum =(num1,num2) =>{
    console.log(num1 +num2)
  }
  return (
    <div className ="App">
      <input placeholder ="Add SomeThing.." onChange={getInput} name="input"/>
      <button onClick={()=>addNum(3,8)}>Add Numbers</button>
    </div>
  )
}

export default Interview2