import { smallUp } from '@/style/config/breakpoints.css';
import { colorWhite } from '@/style/config/color.css';

import { style } from '@vanilla-extract/css';

export const title = style({
  fontWeight: 600,
  marginBottom: 48,

  '@media': smallUp({
    fontSize: 56,
    lineHeight: '77px',
    textAlign: 'center',
  }),
});

export const box = style({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  gap: 32,
  marginBottom: 56,

  '@media': {
    '(min-width: 940px)': {
      flexFlow: 'row',
      justifyContent: 'space-between',
    },

    '(max-width: 1120px)': {
      gap: 16,
      marginInline: 'auto',
    },
  },
});

export const boxLeft = style({
  fontWeight: 600,
  color: colorWhite,
  fontSize: 24,
  lineHeight: '33px',

  '@media': {
    '(min-width:940px)': {
      flex: '0 0 50%',
      fontSize: 48,
      lineHeight: '66px',
      alignSelf: 'flex-start',
      minWidth: 312,
    },
  },
});

export const boxRight = style({
  fontWeight: 400,
  color: colorWhite,
  maxWidth: 768,

  '@media': {
    '(min-width: 600px)': {
      fontSize: 18,
      lineHeight: 1.7,
    },
    '(min-width: 720px)': {
      flex: '0 1 48%',
      minWidth: 312,
    },
  },
});

export const itemTitle = style({
  marginBottom: 16,
  fontSize: 16,
  lineHeight: '22px',
  fontWeight: 600,
  color: '#686868',
});

export const itemText = style({
  fontSize: 32,
  color: colorWhite,
  lineHeight: '44px',
  fontWeight: 600,
});

export const bgLeft = style({
  position: 'absolute',
  top: 0,
  left: 0,
});

export const bgRight = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
});

export const section = style({
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  }),
});
