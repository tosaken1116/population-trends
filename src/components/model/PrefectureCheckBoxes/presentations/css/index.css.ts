import { style } from '@vanilla-extract/css';

import { PRIMARY } from '@/constants/colors';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  width: '80%',
  placeContent: 'center',
});

export const prefectureItem = style({
  width: '8rem',
  listStyle: 'none',
});

export const selectedItem = style({
  color: PRIMARY.main,
});
