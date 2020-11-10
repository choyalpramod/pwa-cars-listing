import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import { HomeFilter } from '../../components/HomeFilter'
import { CarsListing } from '../../components/CarsListing'
import Grid from '@material-ui/core/Grid';
import Pagination from '../../components/Pagination';
import { FiltersTye, CarsApiTye, CarsListPaginatedType } from '../../Types/Home';

const CarsApi = async (key: string, page: number, { color = '', manufacturer = '', sort = 'asc'}: CarsApiTye) => await(await fetch(`https://auto1-mock-server.herokuapp.com/api/cars?sort=${sort}&page=${page}&color=${color}&manufacturer=${manufacturer}`)).json();

const Home = () => {
  const [ pageCounter, setPageCounter ] = useState<number>(1);
  const [ filters, setFilters ] = useState<CarsApiTye>({});
  const carsPromise: CarsListPaginatedType = usePaginatedQuery(['cars', pageCounter, filters], CarsApi);
  const { isLoading, resolvedData }: CarsListPaginatedType  = carsPromise;

  return (
    <Grid container direction='row' justify='center' alignItems='flex-start' className='home-page'>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Grid container className='list'>
          <Grid item lg={3} sm={4} xs={12}>
            <HomeFilter updatedFilters={(details: FiltersTye)=>{
                setFilters(details);
                setPageCounter(1);
              }} isLoadingCars={isLoading}/>
          </Grid>
          <Grid item lg={9} sm={8} xs={12}>
            <div className='list-title'>Available Cars</div>
            <Pagination counter={pageCounter} perPage={10} setCounter={setPageCounter} totalCount={(resolvedData && resolvedData.totalCarsCount) || 1} totalPageCount={(resolvedData && resolvedData.totalPageCount) || 1}>
              <CarsListing
                isLoading={isLoading}
                cars={resolvedData?.cars || []}
              />
            </Pagination>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
