import * as types from '../actions/action-types'

export function getUserListSuccess(users) {
  return {
    type: types.GET_USER_LIST_SUCCESS,
    users
  }
}

export function createUserSuccess(user) {
  return {
    type: types.CREATE_USER_SUCCESS,
    user
  }
}
