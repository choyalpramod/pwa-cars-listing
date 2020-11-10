import React from 'react';
import { render, screen } from '@testing-library/react';
import ScreenLoader from '../index';
import '@testing-library/jest-dom/extend-expect';

test('when screen loader is rendered', () => {
  render(<ScreenLoader />);
  expect(screen.getByTestId('ScreenLoader')).toBeInTheDocument();
  expect(screen.getByTestId('ScreenBlur')).toBeInTheDocument();
  expect(screen.getByTestId('ScreenSpinner')).toBeInTheDocument();
});
