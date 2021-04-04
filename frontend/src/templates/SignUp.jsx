import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import {signUp} from '../reducks/users/operations';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signUp(name, email, password, passwordConfirmation));
  }

  return (
    <div>
      <p>sign up page</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
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
          <label>password(confirmation)</label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
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
    </div>
  )
}

export default SignUp;