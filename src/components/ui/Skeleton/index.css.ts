import { keyframes, style } from '@vanilla-extract/css';

export const skeleton = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const skeletonItem = style({
  'position': 'relative',
  'backgroundColor': '#eee',
  'overflow': 'hidden',
  ':before': {
    position: 'absolute',
    animation: `${skeleton} 2s infinite`,
    content: '""',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, #eee 25%, #fff 50%, #eee 75%, #eee 200%)',
  },
});
