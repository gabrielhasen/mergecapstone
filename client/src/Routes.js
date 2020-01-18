import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import SignInSide from './Components/SignInSide';

const Routes = () => {
    return (
      <Switch>
          <Route path="/home" component={Dashboard} />
          <Route path="/login" component={SignInSide} />
          <Redirect from="/" to="home" />
      </Switch>
    );
  };
  
  export default Routes;