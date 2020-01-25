import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import SignInSide from './views/signin/SignInSide';
import Reservation from './views/reservation/Reservation';
import RouteWithLayout from './component/routewithlayout/RouteWithLayout';
import Dashboard from './layouts/dashboard/Dashboard';
import Sched from './component/calendar/Sched';
import Blank from './layouts/blank/Blank';

const Routes = () => {
    return (
      <Switch>
          <Redirect 
          exact
          from="/"
          to="/home"
          />
          <RouteWithLayout 
          component={Sched}
          exact
          layout={Dashboard}
          path="/home"
          />
          <RouteWithLayout 
          component={SignInSide}
          exact
          layout={Blank}
          path="/login"
          />
          <RouteWithLayout 
          component={Reservation}
          exact
          layout={Blank}
          path="/reservation"
          />
      </Switch>
    );
  };
  
export default Routes;