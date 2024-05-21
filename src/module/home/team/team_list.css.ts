import { manropeMedium, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const teamItem = style({
  marginBottom: 56,
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const title = style({
  marginBottom: 48,
  fontSize: 32,
  lineHeight: '44px',
  fontFamily: manropeSemiBold,
  color: colorWhite,
  textAlign: 'center',

  '@media': {
    'screen and (max-device-width: 767px)': {
      fontSize: 24,
      lineHeight: '33px',
      marginBottom: 32,
    },
  },
});

export const list = style({
  position: 'relative',
  gap: 32,
  justifyContent: 'center',
});

export const item = style({
  borderRadius: '0 0 8px 8px',
  background: 'rgba(154, 9, 139, 0.10)',
});

export const itemPadding = style({
  padding: '0 16px 32px 16px',
});

export const header = style({
  position: 'relative',
  width: '100%',
  height: 160,
  borderRadius: '8px 8px 0 0',
  background: 'linear-gradient(37deg, #9A098B 15.78%, #A81189 18.87%, #CC2484 27.66%, #E23080 35.02%, #EA347F 39.53%)',
});

export const imgBox = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 80,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const name = style({
  marginTop: 112,
  marginBottom: 4,
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
  textAlign: 'center',
  color: colorWhite,
});

export const role = style({
  fontSize: 20,
  lineHeight: '27px',
  fontFamily: manropeMedium,
  color: colorWhite,
  textAlign: 'center',
  marginBottom: 38,
});

export const infoList = style({
  padding: 0,
  gap: 28,
  '@media': {
    'screen and (max-device-width: 767px)': {
      gap: 20,
    },
  },
});

export const infoTitle = style({
  fontSize: 18,
  lineHeight: '27px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
});

export const infoText = style({
  marginTop: 16,
  color: '#B5B5B5',
  fontSize: 14,
  lineHeight: '24px',
  fontFamily: manropeRegular,
  maxWidth: 320,
});
