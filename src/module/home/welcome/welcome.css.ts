import {
  electrolizeRegular,
  manropeBold,
  manropeMedium,
  manropeRegular,
  manropeSemiBold,
} from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const bg = style({
  paddingTop: 108,
  background: 'url(/img/home/welcome/bg_1.png) top left no-repeat, url(/img/home/welcome/bg_2.png) top right no-repeat',
  backgroundSize: 'contain',
});

export const title1 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeMedium,
  color: colorWhite,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 14,
      lineHeight: '19px',
    },
  },
});

export const title2 = style({
  marginBottom: 8,
  fontSize: 64,
  lineHeight: '88px',
  fontFamily: manropeBold,
  color: colorWhite,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 48,
      lineHeight: '66px',
    },
  },
});

export const title3 = style({
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontFamily: manropeRegular,
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0 auto 32px',
      maxWidth: 310,
      fontSize: 14,
      lineHeight: '22px',
    },
  },
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,
  marginBottom: 40,

  '@media': {
    'screen and (max-width: 767px)': {
      gap: 16,
      marginBottom: 56,
    },
  },
});

export const itemValueList = style({
  gap: 8,
  alignItems: 'center',
});

export const itemValue = style({
  padding: '12px 16px',
  borderRadius: 6,
  border: `2px solid ${colorWhite}`,
  fontSize: 40,
  lineHeight: '64px',
  fontFamily: electrolizeRegular,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      padding: 12,
      fontSize: 18,
      lineHeight: '29px',
    },
  },
});

export const itemKey = style({
  marginTop: 16,
  textAlign: 'center',
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontFamily: manropeRegular,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 14,
      lineHeight: '22px',
    },
  },
});

export const imgBox = style({
  marginTop: 40,
  position: 'relative',
});

export const iconBox = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const founderTitle = style({
  marginBottom: 32,
  textAlign: 'center',
  fontSize: 28,
  lineHeight: '38px',
  fontFamily: manropeSemiBold,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 20,
      lineHeight: '27px',
      marginBottom: 16,
    },
  },
});

export const founderBold = style({
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 28,
  lineHeight: '38px',
  fontFamily: manropeSemiBold,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 20,
      lineHeight: '27px',
    },
  },
});

export const founderList = style({
  marginBottom: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
  flexWrap: 'wrap',

  '@media': {
    'screen and (max-width: 767px)': {
      gap: 18,
      marginBottom: 56,
      justifyContent: 'space-around',
    },
  },
});

export const img = style({
  height: 28,

  '@media': {
    'screen and (max-width: 767px)': {
      height: 18,
    },
  },
});
