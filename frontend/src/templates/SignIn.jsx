import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import {signIn} from '../reducks/users/operations';

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signIn(email, password));
  }

  return (
    <div>
      <p>sign in page</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(push('/'))}>
        トップ画面に
      </button>
      <button onClick={() => dispatch(push('/sign_up'))}>
        新規登録画面に
      </button>
    </div>
  )
}
export default SignIn;