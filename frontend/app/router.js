import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import UserList     from './components/containers/user-list'
import SignUp       from './components/containers/sign-up'

export default (
  <Router history={hashHistory}>
    <Route path="/user" >
      <Route path="/list"     component={ UserList } />
      <Route path='/sign_up'  component={ SignUp}>
    </Route>
  </Router>
)
