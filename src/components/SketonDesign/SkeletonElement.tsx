import React, { FunctionComponent as FC } from 'react';

const SkeletonElement: FC<SkeletonElementProps> = ({ type }) => {
  return (
    <div className={`skeleton ${type}`} data-testid='SkeletonElement'/>
  )
}

interface SkeletonElementProps {
  type: string
}

export default SkeletonElement
