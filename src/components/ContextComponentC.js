import React ,{useContext}from 'react'
import ContextComponentF from './ContextComponentF'
import {UserContext,ChannelContext} from '../App'

function ContextComponentC() {
  const user=  useContext(UserContext)
  const channel=  useContext(ChannelContext)
  return (
    <div>
        {user}-{channel}
    </div>
  )
}

export default ContextComponentC