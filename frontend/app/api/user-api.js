import axios from 'axios'
import store from '../store'
import host from '../../config'
import { getUserList } from '../actions/user-actions'

export function UserList() {
  return axios.get('/users')
    .then(response => {
      store.dispatch(getUserList(response.data))
      return response
    })
}
