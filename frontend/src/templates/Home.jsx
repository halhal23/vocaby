import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {signOut} from '../reducks/users/operations'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <div>home page</div>
      <button onClick={() => dispatch(push('/sign_up'))}>新規会員登録はこちらから</button>
      <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </div>
  )
}

export default Home;