import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  marginBottom: 56,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
});
