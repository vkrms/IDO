import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 72,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
});

export const list = style({
  display: 'flex',
  gap: '32px 52px',
  justifyContent: 'space-between',
});

export const itemId = style({
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 56,
  lineHeight: '72px',
  fontFamily: manropeBold,
});

export const itemTitle = style({
  maxWidth: 250,
  marginBottom: 8,
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
  color: colorWhite,
});

export const itemText = style({
  maxWidth: 350,
  fontSize: 16,
  lineHeight: '24px',
  color: colorWhite,
  fontFamily: manropeLight,
});
