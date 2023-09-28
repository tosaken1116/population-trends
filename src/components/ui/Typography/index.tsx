import React from 'react';

import { cva } from 'class-variance-authority';

import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body1,
  body2,
  strong,
  caption,
} from '@/constants/css/fontSize.css';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'body1'
  | 'body2'
  | 'caption';

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<Variant, string> = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  body1,
  body2,
  caption,
};

export const Typography: React.FC<Props> = ({
  variant = 'body1',
  className,
  children,
}) => {
  const typographyStyle = cva(className, {
    variants: {
      variant: variantClasses,
    },
  });

  const Tag =
    variant === 'strong'
      ? 'strong'
      : variant === 'body1' || variant === 'body2'
      ? 'p'
      : variant;

  return <Tag className={typographyStyle({ variant })}>{children}</Tag>;
};
