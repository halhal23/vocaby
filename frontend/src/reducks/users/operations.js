import API from '../../api';
import {push} from 'connected-react-router';
import {signUpAction, signInAction, signOutAction} from './actions';

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
        const data = res.data.data;
        dispatch(signUpAction(data.id, data.name, data.email))
        dispatch(push('/'));
      })
      .catch(err => {
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
        const data = res.data.data;
        dispatch(signInAction(data.id, data.name, data.email))
        dispatch(push('/'));
      })
      .catch(err => {
        dispatch(push('/sign_in'));
      })
  }
}

export const signOut = () => {
  return async (dispatch, getState) => {
    return API.delete('signout', { withCredentials: true })
      .then(res => {
        if (res.data.logged_in === false) {
          dispatch(signOutAction())
          dispatch(push('/sign_in'))
        } else {
        }
      })
  }
}

export const listenAuthState = () => {
  return async (dispatch) => {
    return API.get('/logged_in', { withCredentials: true })
      .then(res => {
        if (res.data.logged_in === true) {
          const data = res.data.data;
          dispatch(signInAction(data.id, data.name, data.email))
        } else if (res.data.logged_in === false) {
          dispatch(push('/sign_in'));
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}