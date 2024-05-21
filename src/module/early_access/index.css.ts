import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const box = style({
  width: 426,
  margin: '0 auto',
});

export const title = style({
  marginBottom: 8,
  textAlign: 'center',
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
  color: colorWhite,
});

export const subtitle = style({
  maxWidth: 374,
  marginBottom: 32,
  textAlign: 'center',
  fontSize: 14,
  lineHeight: '19px',
  fontFamily: manropeRegular,
  color: colorWhite,
});

export const inputBox = style({
  marginBottom: 18,
});

export const inputTitle = style({
  marginBottom: 12,
  fontSize: 14,
  lineHeight: '19px',
  fontFamily: manropeRegular,
  color: colorWhite,
});

export const list = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: 16,
});
