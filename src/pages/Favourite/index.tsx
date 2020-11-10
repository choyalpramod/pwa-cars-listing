import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { CarsListing } from '../../components/CarsListing'
import { CarsType } from '../../Types/Cars';
import { 
  getFavouriteCars,
  FavCar
} from '../../Services/LocalStorageServices';

const Favourite = () => {
  const [favCars, setFavCars] = useState<CarsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const favCarsRes: FavCar = getFavouriteCars();
    const newFavCars: CarsType[] = [];
    
    for(let keys of Object.keys(favCarsRes)) {
      newFavCars.push(favCarsRes[keys]);
    }
    setIsLoading(false);
    setFavCars(newFavCars);
  }, [])

  return (
    <Grid container direction='row' justify='center' alignItems='flex-start' data-testid='Favourites'>
      <Grid item xs={12} sm={12} md={9} lg={9} className='fav-cars-page'>
        <div className='fav-cars-page__title' data-testid='FavouritesTitle'>Favourite Cars</div>
        <div className='fav-cars-page__link'>
          <Link to='/' data-testid='FavouritesHomeLink'>Go to Home</Link>
        </div>
        <CarsListing
          isLoading={isLoading}
          cars={favCars}
        />
      </Grid>
    </Grid>
  );
}

export default Favourite;
