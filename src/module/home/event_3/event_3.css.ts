import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  maxWidth: 700,
  margin: '0 auto 8px',
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
});

export const subtitle = style({
  maxWidth: 894,
  margin: '0 auto 40px',
  color: colorWhite,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  textAlign: 'center',
});

export const list = style({
  marginTop: 48,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 32,
});

export const itemTitle = style({
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  fontFamily: manropeSemiBold,
  display: 'block',
  marginBottom: 8,
});

export const itemText = style({
  maxWidth: 544,
  fontSize: 16,
  lineHeight: '24px',
  color: colorWhite,
});
