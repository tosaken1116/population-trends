import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
});

export const errorText = style({
  fontWeight: 'bold',
});

export const errorIcon = style({
  animationIterationCount: 1,
});
