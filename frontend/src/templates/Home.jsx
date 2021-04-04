import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {getUserId, getUserName, getUserEmail, getIsSignedIn} from '../reducks/users/selectors'

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const id = getUserId(selector)
  const name = getUserName(selector)
  const email = getUserEmail(selector)
  const isSignedIn = getIsSignedIn(selector)
  console.log('cookie');
  console.log(document.cookie);
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
    </div>
  )
}

export default Home;