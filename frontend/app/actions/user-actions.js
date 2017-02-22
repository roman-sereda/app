import * as types from '../actions/action-types'

export function getUserList(users) {
  return {
    type: types.GET_USER_LIST,
    users
  }
}
