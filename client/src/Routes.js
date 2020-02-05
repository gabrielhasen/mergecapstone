import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import GuestHome from './views/home/GuestHome';
import UndergradHome from './views/home/UndergradHome';
import GraduateHome from './views/home/GraduateHome';
import AdminHome from './views/home/AdminHome';
import SignInSide from './views/signin/SignInSide';
import Reservation from './views/reservation/Reservation';
import UndergradAccount from './views/account/UndergradAccount';
import GraduateAccount from './views/account/GraduateAccount';
import AdminAccount from './views/account/AdminAccount';
import GraduateHours from './views/hours/GraduateHours';

const Routes = () => {
    return (
      <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={GuestHome} />
          <Route path="/undergrad" component={UndergradHome} />
          <Route path="/graduate" component={GraduateHome} />
          <Route path="/admin" component={AdminHome} />
          <Route path="/login" component={SignInSide} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/undergrad-account" component={UndergradAccount} />
          <Route path="/graduate-account" component={GraduateAccount} />
          <Route path="/admin-account" component={AdminAccount} />
          <Route path="/graduate-hours" component={GraduateHours} />
      </Switch>
    );
  };
  
export default Routes;