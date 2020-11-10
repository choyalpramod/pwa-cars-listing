import React, { FunctionComponent as FC} from 'react';
import Grid from '@material-ui/core/Grid';
import { CarsType } from '../../Types/Cars';
import { Link } from 'react-router-dom';
import SkeletonProductListing from '../SketonDesign/SkeletonProductListing';

const CarsListing: FC<CarsListingProps> = ({ isLoading, cars }) => {
  if (isLoading) return (
    <>
      {[1,2,3,4,5,6,7,8].map((index: number) => <SkeletonProductListing key={index}/>)}
    </>
  )
  return (
    <>
      <Grid container className='cars-list' spacing={0} data-testid='CarsList'>
        {cars.map((car: CarsType) => {
          return (
            <Grid item xs={12} key={car.stockNumber} className='cars-list__block' data-testid='CarElement'>
              <div className='cars-list__item'>
                <div className='cars-list__image'>
                  <img src={car.pictureUrl} alt='' data-testid='CarPicture'/>
                </div>
                <Grid container direction='row' alignItems='center' className='cars-list__details'>
                  <Grid item xs={12}>
                    <div className='cars-list__car-name' data-testid='CarModelName'>{car.modelName}</div>
                    <div className='cars-list__car-description' data-testid='CarSpec'>Stock #{car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</div>
                    <div className='cars-list__car-action-button'>
                      <Link to={`/details/${car.stockNumber}`} data-testid='CarActionLink'>View details</Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          )
        })}
        {cars.length < 1 && <span data-testid='NoListFound'>No List Available</span>}
      </Grid>
    </>
  );
}

interface CarsListingProps {
  isLoading: boolean,
  cars: CarsType[]
}
export { CarsListing };
