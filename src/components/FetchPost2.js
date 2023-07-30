import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchPost2() {


    const [post,setPost] =useState([])
    const [id,setId]=useState(1)
      useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
      },[id])

  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        {/* <ul>
            {post.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}

        </ul> */}
        <div>
        <h3> Title:{post.title}</h3>
        <h4>Body:{post.body}</h4>
        </div>

    </div>
    
  )
}

export default FetchPost2