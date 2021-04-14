import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {signUp} from '../reducks/users/operations';
import styled from 'styled-components';
// material-ui
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Wrapper = styled.div`
  height: 100vh;
`;

const Content = styled.div`
  width: 500px;
  margin: 50px auto 0;
`;  

const TitleWrapper = styled.div`
  text-align: center;
  padding: 100px 0 ;
  font-size: 30px;
  background: rgb(75, 11, 0);
  color: #fff;
  font-weight: bold;
`;

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    dispatch(signUp(name, email, password, passwordConfirmation));
  }

  return (

    <Wrapper>
      <TitleWrapper>
        SIGN UP
      </TitleWrapper>
      <Content>
        <form>
          <Grid container alignItems="flex-end">
            <Grid item xs={1}>
              <PersonIcon />
            </Grid>
            <Grid item xs={11}>
              <TextField
                label="ユーザーネーム"
                type="name"
                value={name}
                onChange={event => setName(event.target.value)}
                fullWidth/>
            </Grid>
          </Grid>
          <br />
          <Grid container alignItems="flex-end">
            <Grid item xs={1}>
              <EmailIcon />
            </Grid>
            <Grid item xs={11}>
              <TextField
                label="メールアドレス"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                fullWidth/>
            </Grid>
          </Grid>
          <br />
          <Grid container alignItems="flex-end">
            <Grid item xs={1}>
              <LockIcon />
            </Grid>
            <Grid item xs={11}>
              <TextField
                label="パスワード"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                fullWidth/>
            </Grid>
          </Grid>
          <br />
          <Grid container alignItems="flex-end">
            <Grid item xs={1}>
              <LockOutlinedIcon />
            </Grid>
            <Grid item xs={11}>
              <TextField
                label="パスワード（確認用）"
                type="password"
                value={passwordConfirmation}
                onChange={event => setPasswordConfirmation(event.target.value)}
                fullWidth/>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <Grid container justify="center">
            <Button variant="outlined" color="primary" size="large" onClick={() => handleSubmit()}>
              Sign up
            </Button>
          </Grid>
        </form>
      </Content>
    </Wrapper>

    // <div>
    //   <p>sign up page</p>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={name}
    //         onChange={event => setName(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={event => setEmail(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={event => setPassword(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>password(confirmation)</label>
    //       <input
    //         type="password"
    //         name="password_confirmation"
    //         value={passwordConfirmation}
    //         onChange={event => setPasswordConfirmation(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <input type="submit" value="submit" />
    //     </div>
    //   </form>
    //   <br />
    //   <br />
    //   <br />
    //   <button onClick={() => dispatch(push('/'))}>
    //     トップ画面に
    //   </button>
    //   <button onClick={() => dispatch(push('/sign_in'))}>
    //     ログイン画面に
    //   </button>
    // </div>
  )
}

export default SignUp;