import React from 'react';
import Grid from '@material-ui/core/Grid';

const Header = () => {
  return (
    <Grid container direction='row' justify='center' alignItems='flex-start' className='header-component' data-testid='Header'>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Grid container className='header' direction='row' alignItems='center'>
          <Grid item xs={6}>
            <img className='header__logo' src='https://static.auto1.com/@auto1/auto1-platform/4.99.0/img/logo@2x.png' alt='' data-testid='AutoLogo' />
          </Grid>
          <Grid item xs={6} className='header__menu' data-testid='MenuList'>
            <div data-testid='Purchase'>Purchase</div>
            <div data-testid='MyOrder'>My Orders</div>
            <div data-testid='Sell'>Sell</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { Header };
