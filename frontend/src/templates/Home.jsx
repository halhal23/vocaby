import React from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import API from '../api'

const Home = () => {
  const dispatch = useDispatch()
  const getProducts = () => {
    API.get('/products').then(res => { console.log(res) });
  }
  return (
    <div>
      <div>home page</div>
      <button onClick={() => dispatch(push('/sign_up'))}>新規会員登録はこちらから</button>
      <button onClick={() => getProducts()}>Productを取得</button>
    </div>
  )
}

export default Home;