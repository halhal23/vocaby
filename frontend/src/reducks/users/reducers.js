import initialState from '../stores/initialState'
import * as Actions from './actions'

export const UsersReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case Actions.SIGN_UP:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SIGN_OUT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  } 
}