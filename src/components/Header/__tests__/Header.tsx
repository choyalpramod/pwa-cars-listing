import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../index';
import '@testing-library/jest-dom/extend-expect';

test('when header is rendered', () => {
  render(<Header />);
  expect(screen.getByTestId('Header')).toBeInTheDocument();
  expect(screen.getByTestId('AutoLogo')).toBeInTheDocument();
  expect(screen.getByTestId('Purchase').textContent).toBe('Purchase');
  expect(screen.getByTestId('MyOrder').textContent).toBe('My Orders');
  expect(screen.getByTestId('Sell').textContent).toBe('Sell');
});
