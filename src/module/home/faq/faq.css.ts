import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const title = style({
  marginBottom: 56,

  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 56,
    lineHeight: '76px',
  })
});
