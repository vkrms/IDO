import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  maxWidth: 740,
  margin: '0 auto 16px',
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
});

export const subtitle = style({
  marginBottom: 48,
  fontSize: 18,
  lineHeight: '31px',
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
});
