import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {userid}=useParams()
  return (
    <div className='text-cyan-400'>User:{userid}</div>
  )
}

export default User;