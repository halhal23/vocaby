import React from 'react';
import {Switch, Route} from 'react-router';
import {Home, SignUp, SignIn, Wordbooks, TakeTest, ResultTest} from './templates'
import Auth from './Auth';

const TestRouter = () => {
  return (
    <Switch>
      <Route exact path='/sign_up' component={SignUp} />
      <Route exact path='/sign_in' component={SignIn} />
      <Auth>
        <Route exact path='(/)?' component={Home} />
        <Route exact path='/wordbooks' component={Wordbooks} />
        <Route exact path='/tests/take' component={TakeTest} />
        <Route exact path='/tests/:test_id/result' component={ResultTest} />
      </Auth>
    </Switch>
  )
}

export default TestRouter;
