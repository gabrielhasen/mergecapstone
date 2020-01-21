import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import SignInSide from './components/signin/SignInSide';
import Reservation from './components/reservation/Reservation';

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