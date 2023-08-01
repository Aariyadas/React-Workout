import React, { useState } from 'react'
import TitleCallHook from './TitleCallHook'
import ButtonCall from './ButtonCall'
import CountCall from './CountCall'

function ParentCallHook() {
    const [age,setAge]= useState(25)
    const [salary,setSalary] =useState(50000)


    const incrementAge =()=>{
        setAge(age+1)
    }
    const incrementSalary =()=>{
        setSalary(salary+1000)
    }
  return (
    
    <TitleCallHook/>
    <Count text="Age" count={age}/>
    <ButtonCall handleClick={incrementAge}>Increment Age</ButtonCall>
    <CountCall text ="Salary" count ={salary}>
    <ButtonCall handleClick={incrementSalary} >Increment Salary</ButtonCall>
   
  )
}

export default ParentCallHook