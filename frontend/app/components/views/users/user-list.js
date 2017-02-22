import React from 'react'
import { Link } from 'react-router'

export default function(props) {
  return (
    <div className="users">
      {props.users.map(user => {
        return(
          <div key={user.id}>
            {user.name}
          </div>
        )
      })}
    </div>
  )
}
