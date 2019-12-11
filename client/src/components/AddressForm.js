import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { mergeClasses } from '@material-ui/styles';

export default function AddressForm({first_name,last_name,car_reg,handleChange, email}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        You and your vehicle details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="first_name"
            label="First name"
            value={first_name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="last_name"
            label="Last name"
            value={last_name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="car_reg"
            name="car_reg"
            label="Car Registration"
            fullWidth
            value={car_reg}
            onChange={handleChange}
            inputProps={{ style: { textTransform: 'uppercase'}}}

          />
        </Grid>
       
        
      </Grid>
    </React.Fragment>
  );
}