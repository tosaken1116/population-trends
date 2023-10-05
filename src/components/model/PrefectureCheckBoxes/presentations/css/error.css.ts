import { style } from '@vanilla-extract/css';

export const errorText = style({
  fontWeight: 'bold',
});

export const errorIcon = style({
  animationIterationCount: 1,
});

export const overlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const errorMessage = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  margin: 'auto',
  textAlign: 'center',
});

export const loadingContainer = style({
  opacity: 0.4,
});
