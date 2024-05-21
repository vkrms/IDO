import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { linkToBtn } from '@/style/common/link.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const footer = style({
  padding: '56px 0 40px 0',
  background: 'url(/img/footer/bg_1.png) bottom left no-repeat, url(/img/footer/bg_2.png) bottom right no-repeat',

  '@media': {
    'screen and (max-device-width: 767px)': {
      background:
        'url(/img/footer/bg_1_mobile.png) top left no-repeat, url(/img/footer/bg_2_mobile.png) bottom right no-repeat',
    },
  },
});

export const box = style({
  justifyContent: 'space-between',
  gap: 40,

  '@media': {
    'screen and (max-device-width: 767px)': {
      gap: 32,
      justifyContent: 'center',
    },
  },
});

export const logo = style({
  marginBottom: 22,

  '@media': {
    'screen and (max-device-width: 767px)': {
      textAlign: 'center',
    },
  },
});

export const iconList = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginBottom: 24,

  '@media': {
    'screen and (max-device-width: 767px)': {
      justifyContent: 'center',
    },
  },
});

export const text = style({
  maxWidth: 705,
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontFamily: manropeRegular,

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 14,
      lineHeight: '22px',
      textAlign: 'center',
      maxWidth: 'unset',
    },
  },
});

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  '@media': {
    'screen and (max-device-width: 767px)': {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
});

export const linkText = style([
  linkToBtn,
  {
    fontFamily: manropeSemiBold,
    fontSize: 16,
    lineHeight: '22px',
    color: colorWhite,
  },
]);

export const copyright = style({
  marginTop: 40,
  textAlign: 'center',
  color: colorWhite,
  fontSize: 16,
  fontFamily: manropeSemiBold,

  '@media': {
    'screen and (max-device-width: 767px)': {
      marginTop: 28,
    },
  },
});
