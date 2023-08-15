import React from 'react';

const Interview4 = () => {


    
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  };

  const inputStyle = {
    margin: '5px',
    padding: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div className='form' style={formStyle}>
      <input style={inputStyle} placeholder='Name..' />
      <input style={inputStyle} placeholder='Age....' />
      <input style={inputStyle} placeholder='First Name...' />
      <input style={inputStyle} placeholder='Last Name...' />
      <input style={inputStyle} placeholder='Birthday' />
      <button style={buttonStyle}>Submit</button>
    </div>
  );
}

export default Interview4;
