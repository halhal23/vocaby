import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../reducks/users/operations';
import styled from 'styled-components';
// material-ui
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

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
  background: rgb(76, 11, 0);
  color: #fff;
  font-weight: bold;
`;

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(signIn(email, password));
  }

  return (
    <Wrapper>
      <TitleWrapper>
        SIGN IN
      </TitleWrapper>
      <Content>
        <form onSubmit={handleSubmit}>
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
          <br />
          <br />
          <Grid container justify="center">
            <Button variant="outlined" color="primary" size="large" onClick={() => handleSubmit()}>
              Sign in
            </Button>
          </Grid>
        </form>
      </Content>
    </Wrapper>
  )
}
export default SignIn;