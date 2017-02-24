import axios from 'axios'
import store from '../store'
import host from '../../config'
import { getUserListSuccess, createUserSuccess } from '../actions/user-actions'

export function getUserList() {
  return axios.get('/users')
    .then(response => {
      store.dispatch(getUserListSuccess(response.data))
      console.log(response.data)
      return response
    })
}

export function createUser(user) {
  return axios.post('/users', user)
    .then(response => {
      store.dispatch(createUserSuccess(response.data))
      return response
    })
}
