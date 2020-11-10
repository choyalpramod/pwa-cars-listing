import {CarsType} from '../Types/Cars';
const storageName: string = 'favCars';

function getFavouriteCars(): FavCar   {
  const cars: string | null = localStorage.getItem(storageName);
  if (cars) return JSON.parse(cars);
  return {};
}

function setFavouriteCars(cars: FavCar): FavCar  {
  const carsStringify: string = JSON.stringify(cars);
  localStorage.setItem(storageName, carsStringify);
  return JSON.parse(carsStringify);
}

function addToFavouriteCars(cars: CarsType): FavCar  {
  const favCars: FavCar = getFavouriteCars();
  favCars[`${cars.stockNumber}`] = cars;
  return setFavouriteCars(favCars);
}

function deleteFromFavouriteCars(productId: number): FavCar  {
  const favCars: FavCar = getFavouriteCars();
  if (favCars[`${productId}`]) {
    delete favCars[`${productId}`];
    return setFavouriteCars(favCars);
  }
  return favCars;
}

export interface FavCar {
  [key: string]: CarsType
}

export {
  getFavouriteCars,
  addToFavouriteCars,
  deleteFromFavouriteCars
}
