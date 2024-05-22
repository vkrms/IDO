import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 16,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 32,
      lineHeight: '44px',
      marginBottom: 8,
    },
  },
});

export const subtitle = style({
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
  marginBottom: 80,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 40,
    },
  },
});

export const list = style({
  display: 'flex',
  gap: 40,
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      justifyContent: 'center',
    },
  },
});

export const legendList = style({
  display: 'flex',
  gap: 40,
  flexDirection: 'column',
  '@media': {
    'screen and (max-width: 767px)': {
      gap: 32,
    },
  },
});

export const legendTitle = style({
  fontSize: 24,
  lineHeight: '36px',
  fontFamily: manropeBold,
  marginBottom: 4,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 20,
      lineHeight: '30px',
      marginBottom: 8,
    },
  },
});

export const legendText = style({
  maxWidth: 544,
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: manropeLight,
  color: colorWhite,
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 12,
      lineHeight: '18px',
    },
  },
});

export const line = style({
  display: 'inline-block',
  marginRight: 6,
  width: 6,
  height: 36,
  borderRadius: 2,
  verticalAlign: 'middle',
});
