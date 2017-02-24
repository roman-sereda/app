import React from           'react'
import { Link } from        'react-router'

export default React.createClass({

    render: function(){
      return <div className="users">
        {this.props.users.map(user =>
          <span className='user' key={user.id}>
            <h1>{user.name}</h1>
          </span>
        )}
        <Link to='/signup' > Sign Up </Link>
      </div>
    }
})
