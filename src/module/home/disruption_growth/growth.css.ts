import { colorPrimary, pinkTextGrad } from '@/style/config/color.css';

import { smallUp } from '@/style/config/breakpoints.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',
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
  fontWeight: 400,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 104px',

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '29px',
  }),
});

export const timeLimeTitle = style({
  textAlign: 'left',
  textWrap: 'balance',
  maxWidth: 339,
  fontWeight: 600,
  color: colorWhite,
  fontSize: 24,
  marginBottom: 8,

  '@media': smallUp({
    fontSize: 32,
    lineHeight: '44px',
    marginBottom: 24,
  }),
});

export const timeLineInfo = style({
  textAlign: 'left',
  maxWidth: '44ch',
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  fontWeight: 400,
  color: colorWhite,

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const timeLineSubtitle = style({
  fontSize: 22,
  fontWeight: 600,
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

  ...pinkTextGrad,

  fontSize: 24,
  lineHeight: '33px',
  fontWeight: 600,
  flex: '0 1 50%',
  padding: 0,
  order: 1,

  selectors: {
    '&&': {
      marginBottom: 16,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '33px',
      flex: '0 1 50%',
      padding: 0,
    },
  },

  '@media': {
    '(min-width: 900px)': {
      marginTop: 16,
    },
  },
});

export const timeline = style({
  padding: '0 0 0 10px',
});

export const timelineItem = style({
  paddingLeft: 56,
  paddingTop: 19,
  position: 'relative',

  '@media': {
    '(min-width: 900px)': {
      gap: '72px',
      flexFlow: 'row',
      paddingLeft: 0,
    },
  },
});

export const timelineContent = style({
  padding: 0,
  flex: '1 1 50%',
  order: 2,

  selectors: {
    '&&': {
      marginBottom: 32,
    },
  },

  '@media': {
    '(min-width: 900px)': {
      flex: '0 1 50%',
      marginBottom: 80,
      order: 'unset',
    },
  },
});

export const separator = style({
  background: '#4388dd1a',
  borderRadius: 2,
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  ////
  flexGrow: 1,
  width: 24,
  boxSizing: 'border-box',
  marginTop: 24,
  display: 'flex',
  transition: 'all .3s ease',
  maskImage: 'linear-gradient(to bottom, white, transparent var(--tl-grad-mask))',
  padding: '56px 12px 40px',

  '@media': {
    '(min-width: 900px)': {
      left: 'unset',
      top: 24,
    },
  },
});

export const separatorWrap = style({
  position: 'absolute',
  left: 0,
  height: '100%',
  top: 0,

  '@media': {
    '(min-width: 900px)': {
      position: 'static',
      height: 'auto',
    },
  },
});

export const dot = style({
  aspectRatio: '1/1',
  transition: 'all .3s ease',
  transform: 'scale(0)',
  width: 24,
  background: colorPrimary,
  margin: '24px 0',

  selectors: {
    '.appear-down &': {
      transform: 'scale(1.5)',
      boxShadow: '0 0 4px 20px #9A098B1A',
    },
  },
});

export const section = style({
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  }),
});
