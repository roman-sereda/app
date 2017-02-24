import * as types from '../actions/action-types'

const initialState = {
  users: [],
  new_user: []
}

const userReducer = function( state = initialState, action ){

  switch(action.type){
    case types.GET_USER_LIST_SUCCESS:
      return Object.assign({}, state, {users: action.users})

      case types.CREATE_USER_SUCCESS:
        return Object.assign({}, state, {new_user: action.new_user})
  }

  return state
}

export default userReducer
