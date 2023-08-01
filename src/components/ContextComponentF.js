import React from 'react'
import { UserContext,ChannelContext } from '../App'

function ContextComponentF() {
  return (
    <div>
       <UserContext.Consumer>
        {user =>{
            return (
                <ChannelContext.Consumer>
                    {
                        channel =>{
                            return <div>UserContext value {user},Channel Context {channel}</div>
                        }
                    }
                </ChannelContext.Consumer>
            )
        }}
       </UserContext.Consumer>
    </div>
  )
}

export default ContextComponentF