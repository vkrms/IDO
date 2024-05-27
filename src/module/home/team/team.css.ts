import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  maxWidth: 740,
  margin: '0 auto 16px',
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: 310,
      margin: '0 auto 8px',
      fontSize: 32,
      lineHeight: '44px',
    },
  },
});

export const subtitle = style({
  marginBottom: 48,
  fontSize: 18,
  lineHeight: '31px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 12,
      lineHeight: '22px',
    },
  },
});

export const btnBox = style({
  marginTop: 80,

  '@media': {
    'screen and (max-width: 767px)': {
      marginTop: 48,
    },
  },
});
