import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const prefectureItem = style({
  position: 'relative',
  width: '8rem',
  height: '3.5rem',
  listStyle: 'none',
});

export const checkboxStyle = style({
  position: 'absolute',
  height: '2rem',
  width: '2rem',
  top: '50%',
  left: '-10%',
  margin: 'auto',
  transform: 'translateY(-50%)',
});

export const labelStyle = style({
  paddingLeft: '1rem',
  height: '2rem',
  position: 'absolute',
  top: '50%',
  margin: 'auto',
  transform: 'translateY(-50%)',
});
