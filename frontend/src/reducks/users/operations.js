import {countUpAction, countDownAction} from './actions';
import API from '../../api';
import {push} from 'connected-react-router';
import {signUpAction} from './actions';

export const signUp = (name, email, password, passowrd_confirmation) => {
  return async (dispatch) => {
    const payload = {
      name: name,
      email: email,
      password: password,
      passowrd_confirmation: passowrd_confirmation
    }
    API.post('auth', payload)
      .then(res => {
        console.log('success');
        console.log(res.data);
        const data = res.data.data;
        dispatch(signUpAction(data.id, data.name, data.email))
        dispatch(push('/'));
      })
      .catch(err => {
        console.log('fail');
        console.log(err);
        dispatch(push('/sign_up'));
      })
  }
}

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