import React from 'react'

const Forms = () => {


    const getInputs =(e)=>{
        console.log(e)
    }

  return (
   <div className='form' >
    <input placeholder='Name' name="name" onChange={(e)=>getInputs(e.target.value)}/>
    <input placeholder='Age' name="age" onChange={(e)=>getInputs(e.target.value)}/>
    <input placeholder='Hobbies' name="hobbies"onChange={(e)=>getInputs(e.target.value)}/>
    <input placeholder='Date' name="date"onChange={(e)=>getInputs(e.target.value)}/>
    <input placeholder='place' name="place"onChange={(e)=>getInputs(e.target.value)}/>
    

   </div>
  )
}

export default Forms