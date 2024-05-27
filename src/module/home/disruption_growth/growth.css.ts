import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
  maxWidth: 596,
  margin: '0 auto 16px',

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
  maxWidth: 806,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 104px',

  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: 'unset',
      fontSize: 12,
      lineHeight: '22px',
      marginBottom: 48,
    },
  },
});

export const timeline1 = style({
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none',
    },
  },
});

export const timeline2 = style({
  display: 'none',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'flex',
    },
  },
});

export const timmelineItem = style({
  gap: '72px',
  justifyContent: 'center',

  padding: 0,

  '@media': {
    'screen and (max-width: 767px)': {
      gap: 0,
      selectors: {
        '&:before': {
          display: 'none',
        },
      },
    },
  },
});

export const timelineContent = style({
  '@media': {
    'screen and (max-width: 767px)': {
      paddingLeft: 46,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
});

export const timeLimeTitle = style({
  textAlign: 'left',
  maxWidth: 339,
  marginBottom: 24,
  fontSize: 32,
  fontFamily: manropeSemiBold,
  color: colorWhite,
  lineHeight: '44px',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 24,
      lineHeight: '33px',
      marginBottom: 8,
      maxWidth: 'unset',
    },
  },
});

export const timeLineInfo = style({
  textAlign: 'left',
  maxWidth: 476,
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 16,
      lineHeight: '22px',
      maxWidth: 'unset',
      marginBottom: 24,
    },
  },
});

export const timeLineSubtitle = style({
  fontSize: 22,
  fontFamily: manropeSemiBold,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 16,
      lineHeight: '22px',
    },
  },
});

export const timelineDuration = style({
  textAlign: 'left',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 18,
      lineHeight: '29px',
      marginBottom: 16,
    },
  },
});
