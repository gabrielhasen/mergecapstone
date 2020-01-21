import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="last Name"
            label="Last Name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="email" label="Student e-mail" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="billingcode" label="Project Billing Code" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}