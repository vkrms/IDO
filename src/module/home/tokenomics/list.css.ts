import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { style, styleVariants } from '@vanilla-extract/css';

import { manropeSemiBold } from '@/style/config/font.css';
import { small } from '@/style/config/breakpoints.css';

export const infoBox = style({
  position: 'relative',
  width: '100%',
  padding: 48,
  borderRadius: 16,
  overflow: 'hidden',
  background: 'rgba(154, 9, 139, 0.10)',
  textAlign: 'center',
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 56,
});

export const item = style({
  paddingRight: 56,
  borderRight: `1px solid ${colorPrimary}`,

  // media query
  '@media': {
    [small]: {
      paddingRight: 0,
      paddingBottom: 40,
      borderRight: 'none',
      borderBottom: `1px solid ${colorPrimary}`,
    }
  },

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
