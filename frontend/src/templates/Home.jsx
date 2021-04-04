import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {getUserId, getUserName, getUserEmail, getIsSignedIn} from '../reducks/users/selectors'
import {signOut} from '../reducks/users/operations'

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const id = getUserId(selector)
  const name = getUserName(selector)
  const email = getUserEmail(selector)
  const isSignedIn = getIsSignedIn(selector)
  return (
    <div>
      <div>home page</div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      {
        isSignedIn &&
        (<div>ログイン中です</div>)
      }
      <button onClick={() => dispatch(push('/sign_up'))}>新規会員登録はこちらから</button>
      <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </div>
  )
}

export default Home;