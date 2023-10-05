import type { SizeProps } from '.';
import type { Variant } from '../Typography';
import type { SizeProp as IconSizeProps } from '@fortawesome/fontawesome-svg-core';

export const IconSize: Record<
  SizeProps,
  Extract<IconSizeProps, 'xs' | 'xl' | '2x'>
> = {
  s: 'xs',
  m: 'xl',
  l: '2x',
} as const;

export const TextSize: Record<
  SizeProps,
  Extract<Variant, 'body1' | 'body2' | 'caption'>
> = {
  s: 'caption',
  m: 'body2',
  l: 'body1',
} as const;
