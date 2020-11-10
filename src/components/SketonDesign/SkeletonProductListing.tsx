import React, { FunctionComponent as FC} from 'react'
import SkeletonWrapper from './SkeletonWrapper'
import SkeletonElement from './SkeletonElement'

const SkeletonProductListing: FC = () => {
  return (
    <div className='skeleton-wrapper skeleton-wrapper__with-border' data-testid='SkeletonProductListing'>
      <div className="skeleton-product-listing">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <SkeletonWrapper />
    </div>
  )
}

export default SkeletonProductListing;
