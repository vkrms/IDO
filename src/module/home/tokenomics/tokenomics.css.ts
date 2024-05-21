import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 56,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
});

export const box = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  marginBottom: 56,
});

export const boxLeft = style({
  maxWidth: 489,
  fontSize: 48,
  lineHeight: '66px',
  fontFamily: manropeSemiBold,
  color: colorWhite,
});

export const boxRight = style({
  maxWidth: 543,
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeRegular,
  color: colorWhite,
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
