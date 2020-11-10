import React, {FunctionComponent as FC} from 'react';

const SkeletonWrapper: FC = () => {
  return (
    <div className="shimmer-wrapper" data-testid='SkeletonWrapper'>
      <div className="shimmer"></div>
    </div>
  )
}

export default SkeletonWrapper;
