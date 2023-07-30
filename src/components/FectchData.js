import React, { useEffect, useState } from "react";
import axios from "axios";

const FectchData = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response)
        //setPost(response.data)
        // const first10Posts=response.data.slice(0,16)
        //setPost(first10Posts)   Post upto 10

        // Filtered post with title q and a uptp 10
        // const filteredPosts=response.data.filter(post=>post.title.charAt(0).toLowerCase()==='q' || post.title.charAt(0).toLowerCase()==='a').slice(0,10)
        // post.title.chatAt(0).tolowercase extracts the first character at specified index and cobverr to lowercase to ensure that spmparison is case sensitive
        // console.log(filteredPosts)
        // setPost(filteredPosts)
        
        // const evenIndexedPosts = response.data.filter((_, index) => (index + 1) % 2 === 0).slice(0, 15);
        // setPost(evenIndexedPosts);
        //  In this case, the filter function receives two parameters: the current element (which we don't use, indicated by _) and the index of the current element. The condition (index + 1) % 2 === 0 checks if the index of the element is even.
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FectchData;
