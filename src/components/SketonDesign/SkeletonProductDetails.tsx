import React, { FunctionComponent as FC} from 'react'
import SkeletonWrapper from './SkeletonWrapper'
import SkeletonElement from './SkeletonElement'
import Grid from '@material-ui/core/Grid';

const SkeletonProductDetails: FC = () => {
  return (
    <div className='skeleton-wrapper' data-testid='SkeletonProductDetails'>
      <div className="skeleton-product">
        <div>
          <SkeletonElement type="wideProduct" />
        </div>
        <Grid container direction='row' justify='center' alignItems='flex-start'>
          <Grid item xs={12} sm={10}>
            <div className="skeleton-product-desc" data-testid='SkeletonProductSpec'>
              <div>
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
              </div>
              <div className='skeleton-border skeleton-padding'>
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <SkeletonWrapper />
    </div>
  )
}

export default SkeletonProductDetails;
