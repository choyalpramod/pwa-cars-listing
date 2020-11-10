import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonProductDetails from '../SkeletonProductDetails';
import '@testing-library/jest-dom/extend-expect';

test('when skeleton product details is rendered', () => {
  render(<SkeletonProductDetails />);
  expect(screen.getByTestId('SkeletonProductDetails')).toBeInTheDocument();
  expect(screen.getByTestId('SkeletonProductSpec')).toBeInTheDocument();
});
