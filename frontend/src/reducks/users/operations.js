import {countUpAction, countDownAction} from './actions';
import API from '../../api';
import {push} from 'connected-react-router';
import {signUpAction, signInAction} from './actions';

export const signUp = (name, email, password, passowrd_confirmation) => {
  return async (dispatch) => {
    const payload = {
      name: name,
      email: email,
      password: password,
      passowrd_confirmation: passowrd_confirmation
    }
    API.post('signup', payload, { withCredentials: true })
      .then(res => {
        console.log('success desu');
        console.log(res);
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

export const signIn = (email, password) => {
  return async (dispatch) => {
    const payload = {
      email: email,
      password: password,
    }
    API.post('signin', payload, { withCredentials: true })
      .then(res => {
        console.log('success desu');
        console.log(res);
        const data = res.data.data;
        dispatch(signInAction(data.id, data.name, data.email))
        dispatch(push('/'));
      })
      .catch(err => {
        console.log('fail');
        console.log(err);
        dispatch(push('/sign_in'));
      })
  }
}

export const listenAuthState = () => {
  return async (dispatch) => {
    return API.get('/logged_in', { withCredentials: true })
      .then(res => {
        console.log('こちらが成功返答です。');
        console.log(res);
        if (res.data.logged_in === true) {
          console.log('ログイン中です');
          const data = res.data.data;
          dispatch(signInAction(data.id, data.name, data.email))
        } else if (res.data.logged_in === false) {
          console.log('未ログインです');
          dispatch(push('/sign_in'));
        }
      })
      .catch(err => {
        console.log('ダメでした');
        console.log(err);
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