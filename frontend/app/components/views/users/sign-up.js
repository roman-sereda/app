import React from 'react';

export default React.createClass({

    render: function(){
      return <div>
        <form onSubmit = { this.props.createUser } id = "create_user_form" >
          <label>Name:        <input type="text" name="name" /></label><br />
          <label>Surname:     <input type="text" name="surname" /></label><br />
          <label>Email:       <input type="text" name="email" /></label><br />
          <label>Password:    <input type="text" name="password" /></label><br />
          <label>Password_d:  <input type="text" name="password_d" /></label><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    }
})
