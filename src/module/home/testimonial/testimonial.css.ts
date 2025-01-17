import { smallUp } from '@/style/config/breakpoints.css';
import { colorWhite, pinkTextGrad } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const img = style({
  margin: '0 auto 20px',
});

export const title = style({
  fontSize: 40,
  lineHeight: '55px',
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 32,
      lineHeight: '44px',
    },
  },
});

export const subtitle = style({
  marginBottom: 10,
  textAlign: 'center',

  ...pinkTextGrad,

  fontSize: 20,
  lineHeight: '27px',
  fontWeight: 600,
});

export const info = style({
  maxWidth: 674,
  fontSize: 18,
  lineHeight: '29px',
  fontWeight: 400,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 56px',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 14,
      lineHeight: '22px',
      maxWidth: 'unset',
      marginBottom: 24,
    },
  },
});

export const section = style({
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  }),
});
