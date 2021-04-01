import {countUpAction, countDownAction} from './actions'

export const countUp = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const userId = state.user.userId
    return dispatch(countUpAction(userId + 1))
  }
}

export const countDown = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const userId = state.user.userId;
    return dispatch(countDownAction(userId - 1))
  }
}