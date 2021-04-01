import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  console.log(selector.router)
  return (
    <div>
      <div>home page</div>
      <button onClick={() => dispatch(push('/sign_up'))}>新規会員登録はこちらから</button>
    </div>
  )
}

export default Home;