import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../views/users/sign-up'
import * as userApi from '../../api/user-api'
import store from '../../store'

class SignUpContainer extends React.Component{

  createUser(event){
    event.preventDefault()
    console.log("Event: create user")
    var user = new FormData(document.getElementById('create_user_form'))
    console.log(user[name])
    userApi.createUser(user)
  }

  render() {
    return <SignUp user={this.props.user} createUser={this.createUser} />
  }

}

const mapStateToProps = function(store) {
  return {
    new_user: store.userState.new_user
  }
}

export default connect(mapStateToProps)(SignUpContainer);
