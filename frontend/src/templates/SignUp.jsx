import React from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>sign up page</p>
      <button onClick={() => dispatch(push('/'))}>
        トップ画面に
      </button>
    </div>
  )
}

export default SignUp;