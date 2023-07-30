import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchPost3() {
    const[post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick] =useState(1)



    useEffect (()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            setPost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    const handleClick =()=>{
        setIdFromButtonClick(id)
    }
  return (
    <div>
    <input type='text' value={id} onChange={e=>setId(e.target.value)} />
   <button type="button" onClick={handleClick}>Ftech Post</button>
   <h1>{post.title}</h1>
   </div>
  )
}

export default FetchPost3