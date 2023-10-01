import { style } from '@vanilla-extract/css';

import { PRIMARY } from '@/constants/colors';
import { ROUNDED } from '@/constants/rounded';

export const container = style({
  display: 'flex',
  gap: '1rem',
});

export const tabBase = style({
  'border': 'none',
  'cursor': 'pointer',
  'fontWeight': 'bold',
  'padding': '0.5rem 1rem',
  'position': 'relative',
  'overflow': 'hidden',
  'backgroundColor': 'transparent',
  'transition': 'background-color 0.1s ease-in',
  'borderRadius': ROUNDED.m,
  ':before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    transition: 'bottom 0.1s ease',
    width: '80%',
    height: '10%',
    background: `linear-gradient(to bottom, ${PRIMARY.transparent}, ${PRIMARY.light})`,
    bottom: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: ROUNDED.full,
  },
});

export const tabSelected = style({
  'color': PRIMARY.main,
  ':before': {
    bottom: 0,
  },
});

export const tabNotSelected = style({
  'color': PRIMARY.light,
  ':hover': {
    backgroundColor: PRIMARY.transparent,
    color: PRIMARY.contrastText,
  },
});
