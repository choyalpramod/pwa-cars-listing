import React, {FunctionComponent as FC} from 'react';
import Grid from '@material-ui/core/Grid';

const Pagination: FC<PaginationProps> = ({ counter, setCounter, perPage, totalPageCount, totalCount, children }) => {
  const isFirstEligible = counter > 1;
  const firstClassName = isFirstEligible ? '' : 'disable';
  const isPreviousEligible = isFirstEligible;
  const previousClassName = isFirstEligible ? '' : 'disable';
  const isNextEligible = counter < totalPageCount;
  const nextClassName = isNextEligible ? '' : 'disable';
  const isLastEligible = isNextEligible;
  const lastClassName = isNextEligible ? '' : 'disable';

  return (
    <Grid container className='pagination' data-testid='Pagination'>
      <Grid item xs={12} className='pagination__title' data-testid='PaginationTitle'>
        Showing {perPage} of {totalCount} results
      </Grid>
      {children}
      <Grid item xs={12}>
        <Grid container direction='row' justify='center' alignItems='flex-start' className='pagination__links-block'>
          <span className={`pagination__action-link ${firstClassName}`} onClick={() => {
            if (isFirstEligible) setCounter(1);
          }} data-testid='PaginationFirstLink'>First</span>
          <span className={`pagination__action-link ${previousClassName}`} onClick={() => {
            if (isPreviousEligible) setCounter(counter - 1);
          }} data-testid='PaginationPreviousLink'>Previous</span>
          <span data-testid='PaginationCounter'>Page {counter} of {totalPageCount}</span>
          <span className={`pagination__action-link ${nextClassName}`} onClick={() => {
            if (isNextEligible) setCounter(counter + 1);
          }} data-testid='PaginationNextLink'>Next</span>
          <span className={`pagination__action-link ${lastClassName}`} onClick={() => {
            if (isLastEligible) setCounter(totalPageCount);
          }} data-testid='PaginationLastLink'>Last</span>
        </Grid>
      </Grid>
    </Grid>
  );
}

interface PaginationProps {
  counter: number,
  setCounter(counter: number): void,
  perPage: number,
  totalCount: number,
  totalPageCount: number,
  children: React.ReactNode
}
export default Pagination;
