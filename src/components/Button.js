import React from 'react'

function Button( {handleclick,children}) {
  return (
    <div onClick={handleclick}>{children}</div>
  )
}

export default Button