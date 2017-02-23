import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import UserList     from './components/containers/user-list'

export default (
  <Router history={hashHistory}>
      <Route path="/"     component={ UserList } />
  </Router>
)
