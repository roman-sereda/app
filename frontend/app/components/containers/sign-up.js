import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../views/users/sign-up'
import * as userApi from '../../api/user-api'
import store from '../../store'

const SignUpContainer = React.createClass({

  componentDidMount: function() {
    userApi.UserList();
  },

  render: function() {
    return (
      <SignUp user={this.props.user} />
    )
  }

})

const mapStateToProps = function(store) {
  return {
    user: store.userState.user
  }
}

export default connect(mapStateToProps)(SignUpContainer);
