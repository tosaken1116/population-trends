import clsx from 'clsx';

import { skeletonItem } from './index.css';

import { ROUNDED } from '@/constants/rounded';

type Props = {
  width: number;
  height: number;
  rounded: keyof typeof ROUNDED;
  className?: string;
};

export const Skeleton: React.FC<Props> = ({
  width,
  height,
  rounded,
  className,
}) => (
  <div
    className={clsx(skeletonItem, className)}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: ROUNDED[rounded],
    }}
  />
);
