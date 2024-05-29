import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';
import { small, smallB, smallUp } from '@/style/config/breakpoints.css'

import { style } from '@vanilla-extract/css';

export const box = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  marginBottom: 56,

  '@media': {
    [small]: {
      flexDirection: 'column',
      gap: 8,
    }
  }
});

export const boxLeft = style({
  maxWidth: 489,
  fontSize: 48,
  lineHeight: '66px',
  fontFamily: manropeSemiBold,
  color: colorWhite,

  '@media': smallB({
      fontSize: 24,
      lineHeight: '33px',
      alignSelf: 'flex-start',
    })
});

export const boxRight = style({
  maxWidth: 543,
  fontFamily: manropeRegular,
  color: colorWhite,

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '25px',
  })
});

export const infoBox = style({
  position: 'relative',
  width: '100%',
  padding: 48,
  borderRadius: 16,
  overflow: 'hidden',
  background: 'rgba(154, 9, 139, 0.10)',
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 56,
});

export const item = style({
  paddingRight: 56,
  borderRight: `1px solid ${colorPrimary}`,

  selectors: {
    '&:last-child': {
      borderRight: '1px solid transparent',
    },
  },
});

export const itemTitle = style({
  marginBottom: 16,
  fontSize: 16,
  lineHeight: '22px',
  fontFamily: manropeSemiBold,
  color: '#686868',
});

export const itemText = style({
  fontSize: 32,
  color: colorWhite,
  lineHeight: '44px',
  fontFamily: manropeSemiBold,
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
