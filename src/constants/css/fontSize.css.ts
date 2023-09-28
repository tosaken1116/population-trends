import { style } from '@vanilla-extract/css';

import { GREY } from '../colors';

export const h1 = style({
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const h2 = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

export const h3 = style({
  fontSize: '1.15rem',
  fontWeight: 'bold',
});

export const h4 = style({
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const h5 = style({
  fontSize: '0.8rem',
  fontWeight: 'bold',
});

export const h6 = style({
  fontSize: '0.65rem',
  fontWeight: 'bold',
});

export const strong = style({
  fontWeight: 'bold',
});

export const body1 = style({
  fontSize: '1rem',
});

export const body2 = style({
  fontSize: '0.8rem',
});

export const caption = style({
  fontSize: '0.7rem',
  color: `${GREY[500]}`,
});
