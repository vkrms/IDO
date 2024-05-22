import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { style, styleVariants } from '@vanilla-extract/css';

import { manropeSemiBold } from '@/style/config/font.css';

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

  '@media': {
    'screen and (max-width: 767px)': {
      gap: 40,
    },
  },
});

export const item = style({
  display: 'flex',
  gap: 56,
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      gap: 40,
      flexDirection: 'column',
    },
  },
});

export const divider = style({
  width: 2,
  height: 56,
  background: colorPrimary,

  '@media': {
    'screen and (max-width: 767px)': {
      width: 56,
      height: 2,
      background: colorPrimary,
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

export const bgPosVar = styleVariants({
  leftTop: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  leftBottom: {
    position: 'absolute',
    left: -7,
    bottom: 0,
    transform: 'rotate(90deg)',
  },
  rightTop: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  rightBottom: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
