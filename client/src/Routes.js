import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import SignInSide from './Components/Sign In/SignInSide';
import Reservation from './Components/Reservation/Reservation';

const Routes = () => {
    return (
      <Switch>
          <Route path="/home" component={Dashboard} />
          <Route path="/login" component={SignInSide} />
          <Route path="/reservation" component={Reservation} />
          <Redirect from="/" to="home" />
      </Switch>
    );
  };
  
  export default Routes;