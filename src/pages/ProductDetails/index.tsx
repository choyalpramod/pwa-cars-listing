import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CarsType } from '../../Types/Cars';
import { CarsQueryType } from '../../Types/ProductDetails';
import ScreenLoader from '../../components/ScreenLoader/index';
import SkeletonProductDetails from '../../components/SketonDesign/SkeletonProductDetails';
import { 
  getFavouriteCars,
  deleteFromFavouriteCars,
  addToFavouriteCars,
  FavCar
} from '../../Services/LocalStorageServices';
const NotFound = React.lazy(()=> import('../NotFound'));

const ProductDetailsApi = async (key: string, productId: number) => await(await fetch(`https://auto1-mock-server.herokuapp.com/api/cars/${productId}`)).json();

const ProductDetails = () => {
  const { productId }: {
    productId: string
  } = useParams();
  const { isLoading, isError, data }: CarsQueryType = useQuery([`productDetails_${productId}`, productId], ProductDetailsApi)
  const [favCars, setFavCars] = useState<FavCar>({});

  useEffect(() => {
    setFavCars(getFavouriteCars());
  }, [])

  if (isLoading) return <SkeletonProductDetails />;
  if (!data || !data.car || isError) return <Suspense fallback={ScreenLoader}>
    <NotFound />
  </Suspense>
  
  const car: CarsType = data.car;

  return (
    <>
      <Grid container>
        <Grid item xs={12} className='product__image'>
          <img src={car.pictureUrl} alt=''/>
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='flex-start' className='product-page'>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Grid container spacing={1}>
            <Grid item sm={8} xs={12} className='product-details'>
              <div className='product-details__title'>{car.modelName}</div>
              <div className='product-details__spec'>Stock #{car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</div>
              <div className='product-details__description'>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className='favourite-info'>
                <div className='favourite-info__description'>If you like this car, click the button and save it in your collection of favourite items.</div>
                <div className='favourite-info__action-link'>
                  {!favCars[`${car.stockNumber}`] && <button type='button' onClick={() => setFavCars(addToFavouriteCars(car))}>Save</button>}
                  {favCars[`${car.stockNumber}`] && <button type='button' onClick={() => setFavCars(deleteFromFavouriteCars(car.stockNumber))}>Delete from Favourites</button>}
                </div>
              </div>
              <div>
                <Link to='/favourite'>View Favourite Cars</Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetails;
