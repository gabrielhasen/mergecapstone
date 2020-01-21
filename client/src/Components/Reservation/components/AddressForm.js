import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Date Reservation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="datePciker"
            name="datePicker"
            label="Date"
            fullWidth
            autoComplete="fdate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="timePciker"
            name="timePicker"
            label="Time"
            fullWidth
            autoComplete="ftime"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}