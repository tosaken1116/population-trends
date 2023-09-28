import { style } from '@vanilla-extract/css';

export const label = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const container = style({
  position: 'relative',
  display: 'flex',
  height: '2rem',
});

export const hiddenCheck = style({
  display: 'none',
});

export const icon = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: 'auto',
  transform: 'translateY(-50%) translateX(-50%)',
});

export const iconLabel = style({
  userSelect: 'none',
});

export const sSpacing = style({
  paddingLeft: '0.5rem',
  fontSize: '0.8rem',
});

export const mSpacing = style({
  paddingLeft: '1rem',
  fontSize: '1rem',
});

export const lSpacing = style({
  paddingLeft: '1.5rem',
  fontSize: '1.2rem',
});
