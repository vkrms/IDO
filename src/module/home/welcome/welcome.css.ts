import { colorBorder, colorWhite } from '@/style/config/color.css';
import {
  electrolizeRegular,
  manropeBold,
  manropeMedium,
  manropeRegular,
  manropeSemiBold,
} from '@/style/config/font.css';

import { style } from '@vanilla-extract/css';

export const foo = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
})

export const title1 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeMedium,
  color: colorWhite,
  textAlign: 'center',
});

export const title2 = style({
  marginBottom: 8,
  fontSize: 64,
  lineHeight: '88px',
  fontFamily: manropeBold,
  color: colorWhite,
  textAlign: 'center',
});

export const title3 = style({
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontFamily: manropeRegular,
  textAlign: 'center',
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,
  marginBottom: 40,
});

export const itemValueList = style({
  gap: 8,
  alignItems: 'center',
});

export const itemValue = style({
  padding: '12px 16px',
  borderRadius: 6,
  border: `2px solid ${colorBorder}`,
  fontSize: 40,
  lineHeight: '64px',
  fontFamily: electrolizeRegular,
  color: colorWhite,
});

export const itemKey = style({
  marginTop: 16,
  textAlign: 'center',
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontFamily: manropeRegular,
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
});

export const founderBold = style({
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 28,
  lineHeight: '38px',
  fontFamily: manropeSemiBold,
});

export const founderList = style({
  marginBottom: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
  flexWrap: 'wrap',
});
