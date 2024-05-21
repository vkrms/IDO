import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 16,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
});

export const subtitle = style({
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
  marginBottom: 80,
});

export const list = style({
  display: 'flex',
  gap: 40,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const legendList = style({
  display: 'flex',
  gap: 40,
  flexDirection: 'column',
});

export const legendTitle = style({
  fontSize: 24,
  lineHeight: '36px',
  fontFamily: manropeBold,
  marginBottom: 4,
});

export const legendText = style({
  maxWidth: 544,
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: manropeLight,
  color: colorWhite,
});

export const line = style({
  display: 'inline-block',
  marginRight: 6,
  width: 6,
  height: 36,
  borderRadius: 2,
  verticalAlign: 'middle',
});
