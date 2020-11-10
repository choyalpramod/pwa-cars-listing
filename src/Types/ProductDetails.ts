import { CarsType } from './Cars';

export interface CarsQueryType {
  isLoading: boolean,
  isError: boolean,
  data: {
    car?: CarsType
  },
}
