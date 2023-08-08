import React, { useEffect, useState } from "react";

const Interview1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    // let filterData = users.filter((user)=>{

    //   return user.id <5
    // })
    // console.log( "filter data",filterData)
    // setUsers(filterData)

    
    
  };

   


  return (
    <div className="App">
      <h1>Users</h1>

      <div className="card-container-horizontal">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <h2>{user.name}</h2>
              <p>{user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={mapData}>Mapped Array</button>
    </div>
  );
};

export default Interview1;
