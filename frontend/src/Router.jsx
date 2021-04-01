import React from 'react';
import {Switch, Route} from 'react-router';
import {Home, SignUp} from './templates'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/sign_up' component={SignUp} />
      <Route exact path='(/)?' component={Home} />
    </Switch>
  )
}

export default Router;