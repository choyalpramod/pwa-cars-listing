import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarsListing } from '../index';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'
import { CarsType } from '../../../Types/Cars';

const Cars: CarsType[] = [
  {
      pictureUrl: 'https://unknown',
      stockNumber: 12344,
      manufacturerName: 'Unknown',
      modelName: 'Model 1',
      color: 'White',
      mileage: {
          number: 1234,
          unit: 'KM'
      },
      fuelType: 'Petrol'
  }
];

test('When cars API still is loading', () => {
  render(<CarsListing isLoading={true} cars={[]} />);
  expect(screen.getAllByTestId('SkeletonProductListing').length).toBe(8);
});

test('When cars API is successful but list is empty', () => {
  render(<CarsListing isLoading={false} cars={[]} />);
  expect(screen.getByTestId('NoListFound').textContent).toBe('No List Available');
});

test('When cars API is successful and listed', () => {
  render(<Router><CarsListing isLoading={false} cars={Cars} /></Router>);
  expect(screen.getByTestId('CarsList')).toBeInTheDocument();
  expect(screen.getAllByTestId('CarElement').length).toBe(1);
  expect(screen.getByTestId('CarElement')).toBeInTheDocument();
  expect(screen.getByTestId('CarPicture')).toBeInTheDocument();
  expect(screen.getByTestId('CarModelName').textContent).toBe('Model 1');
  expect(screen.getByTestId('CarSpec').textContent).toBe('Stock #12344 - 1234 KM - Petrol - White');
  expect(screen.getByTestId('CarActionLink').textContent).toBe('View details');
});
