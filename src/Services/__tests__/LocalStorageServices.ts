import { getFavouriteCars, addToFavouriteCars, deleteFromFavouriteCars } from '../LocalStorageServices';
import { CarsType } from '../../Types/Cars';

test('should get favourite cars', () => {
    const data: CarsType = {
        stockNumber: 1234,
        manufacturerName: 'bmw',
        modelName: 'model 1',
        color: 'white',
        mileage: {
            number: 12345,
            unit: 'km'
        },
        fuelType: 'petrol',
        pictureUrl: 'https://12345'
    };
    addToFavouriteCars(data);
    expect(JSON.stringify(getFavouriteCars()[1234])).toBe(JSON.stringify(data));

    deleteFromFavouriteCars(1234);
    expect(JSON.stringify(getFavouriteCars())).toBe(JSON.stringify({}));
})
