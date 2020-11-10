import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../index';
import '@testing-library/jest-dom/extend-expect';

test('when footer is rendered', () => {
  render(<Footer />);
  expect(screen.getByTestId('Footer')).toBeInTheDocument();
  expect(screen.getByTestId('FooterDesc').textContent).toBe('© AUTO1 Group 2018');
});
