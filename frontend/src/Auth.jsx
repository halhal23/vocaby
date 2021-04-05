import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIsSignedIn} from './reducks/users/selectors';
import {listenAuthState} from './reducks/users/operations';

const Auth = ({children}) => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);
  if (isSignedIn) {
    return children
  } else {
    dispatch(listenAuthState());
    return <></>
  }
}

export default Auth;