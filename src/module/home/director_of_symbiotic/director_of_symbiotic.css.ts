import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const img = style({
  margin: '0 auto 20px',
});

export const title = style({
  fontSize: 40,
  lineHeight: '55px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 32,
      lineHeight: '44px',
    },
  },
});

export const subtitle = style({
  marginBottom: 10,
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 20,
  lineHeight: '27px',
  fontFamily: manropeSemiBold,

  '@media': {
    'screen and (max-device-width: 767px)': {
      marginBottom: 16,
    },
  },
});

export const info = style({
  maxWidth: 674,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 56px',

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 14,
      lineHeight: '22px',
      maxWidth: 'unset',
      marginBottom: 24,
    },
  },
});
