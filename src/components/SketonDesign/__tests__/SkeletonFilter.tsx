import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonFilter from '../SkeletonFilter';
import '@testing-library/jest-dom/extend-expect';

test('when skeleton filter is rendered', () => {
  render(<SkeletonFilter />);
  expect(screen.getByTestId('SkeletonFilter')).toBeInTheDocument();
  expect(screen.getAllByTestId('SkeletonElement').length).toBe(2);
});
