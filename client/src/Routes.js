import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from './layouts/dashboard/Dashboard';
import SignInSide from './views/signin/SignInSide';
import Reservation from './views/reservation/Reservation';

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