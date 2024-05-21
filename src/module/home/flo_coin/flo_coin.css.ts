import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const bg = style({
  marginTop: 12,
  backgroundImage: 'url(/img/home/flo_coin/bg.png)',
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',

  '@media': {
    'screen and (max-device-width: 767px)': {
      backgroundImage: 'url(/img/home/flo_coin/bg_mobile.png)',
      backgroundSize: '30%',
    },
  },
});

export const title = style({
  marginBottom: 8,
  fontSize: 52,
  lineHeight: '71px',
  fontFamily: manropeSemiBold,
  color: colorWhite,
  textAlign: 'center',

  '@media': {
    'screen and (max-device-width: 767px)': {
      maxWidth: 252,
      margin: '0 auto 8px',
      fontSize: 32,
      lineHeight: '44px',
    },
  },
});

export const subtitle = style({
  marginBottom: 16,
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 16,
  lineHeight: '22px',
  fontFamily: manropeBold,

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 12,
      lineHeight: '16px',
      marginBottom: 8,
    },
  },
});

export const text = style({
  maxWidth: 745,
  margin: '0 auto 80px',
  textAlign: 'center',
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 12,
      lineHeight: '16px',
      maxWidth: 358,
      margin: '0 auto 40px',
    },
  },
});

export const list = style({
  display: 'flex',
  gap: '72px 32px',

  '@media': {
    'screen and (max-device-width: 767px)': {
      gap: 32,
    },
  },
});

export const item = style({
  '@media': {
    'screen and (max-device-width: 767px)': {
      textAlign: 'center',
    },
  },
});

export const itemTitle = style({
  fontSize: 24,
  lineHeight: '33px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  marginBottom: 8,

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 20,
      lineHeight: '27px',
    },
  },
});

export const itemText = style({
  fontSize: 16,
  lineHeight: '24px',
  color: colorWhite,
  fontFamily: manropeLight,
  maxWidth: 352,
  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 12,
      lineHeight: '22spx',
    },
  },
});
