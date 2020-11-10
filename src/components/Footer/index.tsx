import React from 'react';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  return (
    <Grid container className='footer' direction='row' alignItems='center' data-testid='Footer'>
      <Grid item xs={12} data-testid='FooterDesc'>© AUTO1 Group 2018</Grid>
    </Grid>
  );
}

export { Footer };
