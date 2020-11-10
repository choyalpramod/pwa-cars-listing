import { CarsType } from './Cars';

export interface FiltersTye {
  color?: string,
  manufacturer?: string
}
  
export type CarsApiTye = {
  sort?: string
} & FiltersTye;

export interface CarsListPaginatedType {
  isLoading: boolean,
  resolvedData: {
    cars?: CarsType[]
    totalPageCount?: number,
    totalCarsCount?: number
  },
}
