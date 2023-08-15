import React from 'react'

const Interview3 = () => {
    const numbers =[1,2,3,4,5,6,7,8,9,0]
    const details =[
        { id:1,name:"Ariya",age:26},
        {id:2,name:"Devu",age:24},
        {id:3,name:"Shakku",age:33},
        {id:4,name:"Hanna",age:20},
        
    ]
  return (
    <div className='App'>
        {/* <ul>
            {numbers.map((number)=>{
                return <li key={number}>{number}</li>
            })}
        </ul> */}

        <ul>
            {details.map((detail)=>{
                return  (
                <div key={detail.id}>
               <li> Name:{detail.name} , Age:{detail.age}</li>
                
                </div>
                )
            })}
        </ul>
    </div>
  )
}

export default Interview3