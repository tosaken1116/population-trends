import { style } from '@vanilla-extract/css';

export const container = style({
  width: '80vw',
  height: '50vh',
  minWidth: '280px',
  minHeight: '320px',
  maxWidth: '1200px',
  maxHeight: '1000px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
