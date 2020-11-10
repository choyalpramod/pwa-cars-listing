import React, { FunctionComponent as FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import SkeletonFilter from '../SketonDesign/SkeletonFilter';
import Select from 'react-select';
import { FiltersTye } from '../../Types/Home';

const ColorsApi = async () => await(await fetch('https://auto1-mock-server.herokuapp.com/api/colors')).json();
const ManufacturerApi = async () => await(await fetch('https://auto1-mock-server.herokuapp.com/api/manufacturers')).json();

const HomeFilter: FC<HomeFilterProps> = ({ updatedFilters, isLoadingCars }) => {
  const colorsPromise = useQuery('colors', ColorsApi);
  const isLoadingColor = colorsPromise.isLoading;
  const colors = colorsPromise.data?.colors || [];
  const manufaturerPromise = useQuery('manufacturer', ManufacturerApi);
  const isLoadingManufacturer = manufaturerPromise.isLoading;
  const manufacturers = manufaturerPromise?.data?.manufacturers || [];
  const [getColor, setColor] = useState<string>('');
  const [getManufacturer, setManufacturer] = useState<string>('');
  let buttonAttr: {
    disabled?: boolean
  } = {};
  if (isLoadingCars) buttonAttr = {
    disabled: true
  };

  return (
    <div className='filter'>
      <div>
        {isLoadingColor && <SkeletonFilter />}
        {!isLoadingColor && <>
          <div className='filter__label'>Color</div>
          <div className='filter__field'>
            <Select
              data-testid='ColorDropDown'
              onChange={(e: any)=>{setColor(e?.value)}}
              options={getModifiedOptions(colors, 'All car colors')}
            />
          </div>
        </>}
        {isLoadingManufacturer && <SkeletonFilter />}
        {!isLoadingManufacturer && <>
          <div className='filter__label'>Manufacturer</div>
          <div className='filter__field'>
            <Select
              data-testid='ManufacturerDropDown'
              onChange={(e: any)=>{setManufacturer(e?.value)}}
              options={getModifiedOptions(manufacturers.map((manufacturer: ManufacturerType)=>manufacturer.name), 'All manufacturers')}
            />
          </div>
        </>}
        <div className='filter__action'>
          <button onClick={()=>{updatedFilters({ color: getColor, manufacturer: getManufacturer})}} {...buttonAttr} data-testid='FilterButton'>
            Filter
          </button>
        </div>
        <div className='filter__addition-link'>
          <Link to='/favourite'>See Favourite Cars</Link>
        </div>
      </div>
    </div>
  );
}

function getModifiedOptions (options: string[], firstLabel: string) {
  let list: OptionsType[] = [];
  list.push({
    label: firstLabel,
    value: ''
  });
  options.forEach((option) => {
    list.push({
      label: option,
      value: option
    })
  });
  return list;
}

interface OptionsType {
  label: string,
  value: string
}
interface HomeFilterProps {
  updatedFilters: (details: FiltersTye) => void,
  isLoadingCars: boolean
}

interface ManufacturerType {
  name: string
}
export { HomeFilter };
