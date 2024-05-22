import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 56,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 32,
      lineHeight: '44px',
      marginBottom: 22,
    },
  },
});

export const box = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  marginBottom: 56,

  '@media': {
    'screen and (max-width: 767px)': {
      justifyContent: 'start',
      marginBottom: 32,
    },
  },
});

export const boxLeft = style({
  maxWidth: 489,
  fontSize: 48,
  lineHeight: '66px',
  fontFamily: manropeSemiBold,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 24,
      lineHeight: '33px',
      maxWidth: 'unset',
    },
  },
});

export const boxRight = style({
  maxWidth: 543,
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeRegular,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: 'unset',
      fontSize: 12,
      lineHeight: '22px',
    },
  },
});
