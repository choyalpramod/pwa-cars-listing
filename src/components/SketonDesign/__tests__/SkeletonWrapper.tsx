import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonWrapper from '../SkeletonWrapper';
import '@testing-library/jest-dom/extend-expect';

test('when skeleton warpper is rendered', () => {
  render(<SkeletonWrapper />);
  expect(screen.getByTestId('SkeletonWrapper')).toBeInTheDocument();
});
