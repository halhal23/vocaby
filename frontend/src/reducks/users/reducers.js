import initialState from '../stores/initialState'
import * as Actions from './actions'

export const UsersReducer = (state = initialState.user, action) => {
   switch (action.type) {
     case Actions.SIGN_UP:
       return {
         ...state,
         ...action.payload
       }
    case Actions.COUNT_UP:
      return {
        ...state,
        ...action.payload
      }
    case Actions.COUNT_DOWN:
      return {
        ...state,
        ...action.payload
      }
     default:
       return state
   } 
}