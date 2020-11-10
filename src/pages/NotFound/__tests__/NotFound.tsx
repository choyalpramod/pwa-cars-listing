import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../index';
import '@testing-library/jest-dom/extend-expect';

test('when page not found is rendered', () => {
  render(<Router><NotFound /></Router>);
  expect(screen.getByTestId('PageNotFound')).toBeInTheDocument();
  expect(screen.getByTestId('PageNotFoundLogo')).toBeInTheDocument();
  expect(screen.getByTestId('PageNotFoundTitle').textContent).toBe('404 - Not Found');
  expect(screen.getByTestId('PageNotFoundDesc').textContent).toBe('Sorry, the page you are looking for does not exist.');
  expect(screen.getByTestId('PageNotFoundAdditionalInfo').textContent).toBe('You can always go back to the homepage');
  expect(screen.getByTestId('PageNotFoundHomeLink').tagName).toBe('A');
});
