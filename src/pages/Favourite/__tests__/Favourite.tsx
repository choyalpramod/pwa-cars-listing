import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Favourite from '../index';
import '@testing-library/jest-dom/extend-expect';
import { addToFavouriteCars, deleteFromFavouriteCars } from '../../../Services/LocalStorageServices';
import { CarsType } from '../../../Types/Cars';

test('when pagination is rendered, empty list', () => {
  render(<Router><Favourite /></Router>);
  expect(screen.getByTestId('Favourites')).toBeInTheDocument();
  expect(screen.getByTestId('FavouritesTitle').textContent).toBe('Favourite Cars');
  expect(screen.getByTestId('FavouritesHomeLink').tagName).toBe('A');
  expect(screen.getByTestId('FavouritesHomeLink').textContent).toBe('Go to Home');
  expect(screen.getByTestId('NoListFound')).toBeInTheDocument();
});

test('when pagination is rendered with list', () => {
  const data: CarsType = {
    stockNumber: 1234,
    fuelType: 'petrol',
    manufacturerName: 'bmw',
    mileage: {
      number: 12345,
      unit: 'km'
    },
    color: 'white',
    modelName: 'model 1',
    pictureUrl: 'unknown'
  };
  addToFavouriteCars(data)
  render(<Router><Favourite /></Router>);
  expect(screen.getByTestId('Favourites')).toBeInTheDocument();
  expect(screen.getByTestId('FavouritesTitle').textContent).toBe('Favourite Cars');
  expect(screen.getByTestId('FavouritesHomeLink').tagName).toBe('A');
  expect(screen.getByTestId('FavouritesHomeLink').textContent).toBe('Go to Home');
  expect(screen.getByTestId('CarsList')).toBeInTheDocument();
  deleteFromFavouriteCars(data.stockNumber);
});
