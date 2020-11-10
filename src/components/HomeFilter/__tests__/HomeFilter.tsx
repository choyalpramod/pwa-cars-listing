import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomeFilter } from '../index';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ReactQuery from 'react-query';
jest.mock('react-query');

test('When home filter is rendered with cars are loading', () => {
  ReactQuery.useQuery.mockResolvedValue({
    isLoading: true
  })
  const updatedFilters = () => {}
  render(<Router><HomeFilter isLoadingCars={true}  updatedFilters={updatedFilters}/></Router>);
  expect(screen.getByTestId('FilterButton').getAttributeNames().includes('disabled')).toBe(true);
  expect(ReactQuery.useQuery).toHaveBeenCalledTimes(2);
});

test('When home filter is rendered with cars', () => {
  ReactQuery.useQuery.mockResolvedValue({
    isLoading: true,
    data: {
      colors: [
        'white',
        'red'
      ],
      manufacturers: [
        {
          name: 'bmw'
        }
      ]
    }
  })
  const updatedFilters = () => {}
  render(<Router><HomeFilter isLoadingCars={false}  updatedFilters={updatedFilters}/></Router>);
  expect(screen.getByTestId('FilterButton').getAttributeNames().includes('disabled')).toBe(false);
  expect(ReactQuery.useQuery).toHaveBeenCalledTimes(2);
  expect(screen.getByTestId('ColorDropDown')).toBeInTheDocument();
  expect(screen.getByTestId('ManufacturerDropDown')).toBeInTheDocument();
});
