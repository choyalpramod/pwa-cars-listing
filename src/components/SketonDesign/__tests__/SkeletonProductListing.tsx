import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonProductListing from '../SkeletonProductListing';
import '@testing-library/jest-dom/extend-expect';

test('when skeleton product listing is rendered', () => {
  render(<SkeletonProductListing />);
  expect(screen.getByTestId('SkeletonProductListing')).toBeInTheDocument();
  expect(screen.getAllByTestId('SkeletonElement').length).toBe(4);
});
