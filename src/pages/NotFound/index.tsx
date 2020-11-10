import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='page-notfound' data-testid='PageNotFound'>
      <div className='page-notfound__logo'>
        <img src='https://static.auto1.com/@auto1/auto1-platform/4.99.0/img/logo@2x.png' alt='' data-testid='PageNotFoundLogo'/>
      </div>
      <div className='page-notfound__title' data-testid='PageNotFoundTitle'>
        404 - Not Found
      </div>
      <div className='page-notfound__description' data-testid='PageNotFoundDesc'>
        Sorry, the page you are looking for does not exist.
      </div>
      <div className='page-notfound__description' data-testid='PageNotFoundAdditionalInfo'>
        You can always go back to the <Link to='/' data-testid='PageNotFoundHomeLink'>homepage</Link>
      </div>
    </div>
  );
}

export default NotFound;
