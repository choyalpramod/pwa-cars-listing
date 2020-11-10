import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../index';
import '@testing-library/jest-dom/extend-expect';

test('when pagination is rendered', () => {
  const setCounterMock = jest.fn();
  render(<Pagination counter={1} setCounter={setCounterMock} perPage={10} totalPageCount={10} totalCount={100} children={<></>}/>);
  expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  expect(screen.getByTestId('PaginationTitle').textContent).toBe('Showing 10 of 100 results');
  expect(screen.getByTestId('PaginationFirstLink').textContent).toBe('First');
  expect(screen.getByTestId('PaginationFirstLink').classList.contains('disable')).toBe(true);
  expect(screen.getByTestId('PaginationPreviousLink').classList.contains('disable')).toBe(true);
  expect(screen.getByTestId('PaginationPreviousLink').textContent).toBe('Previous');
  expect(screen.getByTestId('PaginationCounter').textContent).toBe('Page 1 of 10');
  expect(screen.getByTestId('PaginationNextLink').textContent).toBe('Next');
  expect(screen.getByTestId('PaginationNextLink').classList.contains('disable')).toBe(false);
  expect(screen.getByTestId('PaginationLastLink').textContent).toBe('Last');
  expect(screen.getByTestId('PaginationLastLink').classList.contains('disable')).toBe(false);
});

test('when pagination rendered, forward events triggered', async () => {
  const setCounterMock = jest.fn();
  render(<Pagination counter={1} setCounter={setCounterMock} perPage={10} totalPageCount={10} totalCount={100} children={<></>}/>);
  expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('PaginationFirstLink'));
  expect(setCounterMock).toBeCalledTimes(0);
  fireEvent.click(screen.getByTestId('PaginationPreviousLink'));
  expect(setCounterMock).toBeCalledTimes(0);
  fireEvent.click(screen.getByTestId('PaginationNextLink'));
  expect(setCounterMock).toBeCalled();
});

test('when pagination rendered, backwards events triggered', async () => {
  const setCounterMock = jest.fn();
  render(<Pagination counter={10} setCounter={setCounterMock} perPage={10} totalPageCount={10} totalCount={100} children={<></>}/>);
  expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('PaginationLastLink'));
  expect(setCounterMock).toBeCalledTimes(0);
  fireEvent.click(screen.getByTestId('PaginationNextLink'));
  expect(setCounterMock).toBeCalledTimes(0);
  fireEvent.click(screen.getByTestId('PaginationPreviousLink'));
  expect(setCounterMock).toBeCalledTimes(1);
});

test('when pagination is rendered with page 2', () => {
  const setCounterMock = jest.fn();
  render(<Pagination counter={2} setCounter={setCounterMock} perPage={10} totalPageCount={10} totalCount={100} children={<></>}/>);
  expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  expect(screen.getByTestId('PaginationTitle').textContent).toBe('Showing 10 of 100 results');
  expect(screen.getByTestId('PaginationFirstLink').textContent).toBe('First');
  expect(screen.getByTestId('PaginationFirstLink').classList.contains('disable')).toBe(false);
  expect(screen.getByTestId('PaginationPreviousLink').classList.contains('disable')).toBe(false);
  expect(screen.getByTestId('PaginationPreviousLink').textContent).toBe('Previous');
  expect(screen.getByTestId('PaginationCounter').textContent).toBe('Page 2 of 10');
  expect(screen.getByTestId('PaginationNextLink').textContent).toBe('Next');
  expect(screen.getByTestId('PaginationNextLink').classList.contains('disable')).toBe(false);
  expect(screen.getByTestId('PaginationLastLink').textContent).toBe('Last');
  expect(screen.getByTestId('PaginationLastLink').classList.contains('disable')).toBe(false);
});
