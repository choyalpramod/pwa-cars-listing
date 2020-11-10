import React from 'react';

const ScreenLoader = () => {
  return (
    <div className='screen-loader' data-testid='ScreenLoader'>
      <div className='screen-loader__bg' data-testid='ScreenBlur'/>
      <div className='screen-loader__loader' data-testid='ScreenSpinner'/>
    </div>
  );
}

export default ScreenLoader;
