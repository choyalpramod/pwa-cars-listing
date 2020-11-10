import React, {FunctionComponent as FC} from 'react';
import SkeletonWrapper from './SkeletonWrapper';
import SkeletonElement from './SkeletonElement';

const SkeletonFilter: FC = () => {
  return (
    <div className='skeleton-wrapper' data-testid='SkeletonFilter'>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
      </div>
      <SkeletonWrapper />
    </div>
  )
}

export default SkeletonFilter;
