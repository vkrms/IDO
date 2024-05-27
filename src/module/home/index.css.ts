import { style } from '@vanilla-extract/css';

export const boxMargin = style({
  height: 120,

  '@media': {
    'screen and (max-width: 767px)': {
      height: 64,
    },
  },
});
