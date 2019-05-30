import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from './private'
import PublicRoute from './public'

// Pages
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => (
  <Switch>
    <PrivateRoute exact path='/' component={Home} />
    <PublicRoute path='/login' component={Login} />
  </Switch>
)

export default Routes
