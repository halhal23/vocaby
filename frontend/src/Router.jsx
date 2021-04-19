import React from 'react';
import {Switch, Route} from 'react-router';
import {Home, SignUp, SignIn, Wordbooks, TakeTest, ResultTest} from './templates'
import Auth from './Auth';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/sign_up' component={SignUp} />
      <Route exact path='/sign_in' component={SignIn} />
      <Route exact path='(/)?' component={Home} />
      <Auth>
        <Route exact path='/wordbooks' component={Wordbooks} />
        <Route exact path='/tests/take' component={TakeTest} />
        <Route exact path='/tests/result' component={ResultTest} />
      </Auth>
    </Switch>
  )
}

export default Router;