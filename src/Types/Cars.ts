export interface CarsType {
  stockNumber: number,
  manufacturerName: string,
  modelName: string,
  color: string,
  mileage: {
    number: number,
    unit: string
  },
  fuelType: string,
  pictureUrl: string
}
