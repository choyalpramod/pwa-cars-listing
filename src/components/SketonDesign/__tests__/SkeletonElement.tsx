import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonElement from '../SkeletonElement';
import '@testing-library/jest-dom/extend-expect';

test('when skeleton element is rendered', () => {
  render(<SkeletonElement type='item' />);
  expect(screen.getByTestId('SkeletonElement')).toBeInTheDocument();
  expect(screen.getByTestId('SkeletonElement').classList.contains('item')).toBe(true);
});
